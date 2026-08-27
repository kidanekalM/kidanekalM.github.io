import { FiCheck, FiDownload, FiGithub, FiTerminal } from "react-icons/fi";
import styles from "./styles.module.css";

const RELEASE_URL = "https://github.com/kidanekalM/text_to_speech/releases/tag/v1.0.0";
const WINDOWS_URL = "https://github.com/kidanekalM/text_to_speech/releases/download/v1.0.0/AFA.Setup.1.0.0.exe";
const LINUX_URL = "https://github.com/kidanekalM/text_to_speech/releases/download/v1.0.0/AFA-1.0.0.AppImage";
const SOURCE_URL = "https://github.com/kidanekalM/text_to_speech";

const platforms = [
  { name: "Windows", status: "Available", detail: "89.5 MB installer", href: WINDOWS_URL },
  { name: "Linux", status: "Available", detail: "114.4 MB AppImage", href: LINUX_URL },
  { name: "macOS", status: "In development", detail: "No public DMG yet" },
];

export default function TextToSpeech() {
  return <main className={styles.page}>
    <section className={styles.hero}>
      <div className={styles.heroCopy}>
        <p className={styles.eyebrow}>AFA / Desktop accessibility tool</p>
        <h1>Type it.<br/><span>Say it.</span></h1>
        <p className={styles.lead}>A floating desktop app that turns typed text into speech and routes it into meetings as virtual microphone input.</p>
        <div className={styles.actions}>
          <a className={styles.primary} href={WINDOWS_URL}><FiDownload/> Download for Windows</a>
          <a className={styles.secondary} href={LINUX_URL}><FiDownload/> Linux AppImage</a>
        </div>
      </div>
      <div className={styles.productVisual} aria-label="AFA product concept">
        <div className={styles.floater}><span>AFA</span><p>Let me speak this clearly.</p><button type="button">Speak</button></div>
        <div className={styles.signal}>{[1,2,3,4,5,6,7,8,9].map((bar)=><i key={bar}/>)}</div>
        <small>Text → speech → virtual microphone</small>
      </div>
    </section>

    <section className={styles.workflow}>
      <p className={styles.eyebrow}>How it works</p>
      <div>{["Open the floater","Type what you need to say","Route speech to the meeting"].map((step,index)=><article key={step}><span>0{index+1}</span><h2>{step}</h2></article>)}</div>
    </section>

    <section className={styles.downloads}>
      <header><p className={styles.eyebrow}>Release 1.0.0</p><h2>Choose your platform.</h2></header>
      <div className={styles.platformList}>{platforms.map((platform)=><article key={platform.name}>
        <div><FiCheck/><span>{platform.status}</span></div><h3>{platform.name}</h3><p>{platform.detail}</p>
        {platform.href ? <a href={platform.href}>Download <FiDownload/></a> : <span className={styles.unavailable}>Build not published</span>}
      </article>)}</div>
    </section>

    <section className={styles.technical}>
      <div><FiTerminal/><p>Linux quick start</p><code>chmod +x AFA-1.0.0.AppImage<br/>./AFA-1.0.0.AppImage</code></div>
      <div><FiGithub/><p>Inspect the work</p><a href={SOURCE_URL} target="_blank" rel="noreferrer">Source repository</a><a href={RELEASE_URL} target="_blank" rel="noreferrer">Release notes</a></div>
    </section>
  </main>;
}
