import { PassThrough } from "node:stream";
import { renderToPipeableStream } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server.js";
import App from "./App";

export { getRouteModule, getSeoData, prerenderRoutes } from "./lib/seo";

export function render(pathname: string): Promise<string> {
  return new Promise((resolve, reject) => {
    let html = "";
    let didError = false;
    const output = new PassThrough();
    output.setEncoding("utf8");
    output.on("data", (chunk: string) => {
      html += chunk;
    });
    output.on("end", () => {
      clearTimeout(timeout);
      if (didError) {
        reject(new Error(`Failed to render ${pathname}`));
      } else {
        resolve(html);
      }
    });
    output.on("error", (error) => {
      clearTimeout(timeout);
      reject(error);
    });

    const { pipe, abort } = renderToPipeableStream(
      <StaticRouter location={pathname}>
        <App />
      </StaticRouter>,
      {
        onAllReady() {
          pipe(output);
        },
        onShellError(error) {
          clearTimeout(timeout);
          reject(error);
        },
        onError(error) {
          didError = true;
          console.error(error);
        },
      }
    );

    const timeout = setTimeout(() => abort(), 15_000);
  });
}
