import styles from './styles.module.css';

const RELEASE_BASE_URL = 'https://github.com/kidanekalM/text_to_speech/releases/latest/download';
const MAC_INSTALLER_URL = `${RELEASE_BASE_URL}/text-to-speech-installer.dmg`;
const WINDOWS_INSTALLER_URL = `${RELEASE_BASE_URL}/text-to-speech-installer.exe`;
const LINUX_APPIMAGE_URL = `${RELEASE_BASE_URL}/text-to-speech-linux.AppImage`;
const LINUX_TARBALL_URL = `${RELEASE_BASE_URL}/text-to-speech-linux.tar.gz`;
const LINUX_MANIFEST_URL = `${RELEASE_BASE_URL}/latest-linux.yml`;
const PAGE_URL = 'https://kidanekal.vercel.app/text_to_speech';

function TextToSpeech() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <p className={styles.eyebrow}>App Installer</p>
        <h1>Text to Speech</h1>
        <p className={styles.lead}>
          Download the latest desktop installer for macOS, Windows, or Linux from one page.
        </p>

        <div className={styles.actions}>
          <a className={styles.primaryAction} href={MAC_INSTALLER_URL}>
            Download macOS Installer
          </a>
          <a className={styles.secondaryAction} href={WINDOWS_INSTALLER_URL}>
            Download Windows Installer
          </a>
          <a className={styles.secondaryAction} href={LINUX_APPIMAGE_URL}>
            Download Linux AppImage
          </a>
        </div>
      </section>

      <section className={styles.cardGrid}>
        <article className={styles.card}>
          <h2>macOS</h2>
          <p>DMG package, 105 MB</p>
        </article>

        <article className={styles.card}>
          <h2>Windows</h2>
          <p>EXE package, 78 MB</p>
        </article>

        <article className={styles.card}>
          <h2>Linux</h2>
          <p>AppImage package, 109 MB. Best option for simple sharing on Linux.</p>
        </article>

        <article className={styles.card}>
          <h2>macOS Direct URL</h2>
          <p>{MAC_DOWNLOAD_URL}</p>
        </article>

        <article className={styles.card}>
          <h2>Windows Direct URL</h2>
          <p>{WINDOWS_DOWNLOAD_URL}</p>
        </article>

        <article className={styles.card}>
          <h2>Linux AppImage URL</h2>
          <p>{LINUX_APPIMAGE_URL}</p>
        </article>

        <article className={styles.card}>
          <h2>Linux Tarball URL</h2>
          <p>{LINUX_TARBALL_URL}</p>
        </article>

        <article className={styles.card}>
          <h2>Linux Update Manifest</h2>
          <p>{LINUX_MANIFEST_URL}</p>
        </article>

        <article className={styles.card}>
          <h2>Linux Alternate Download</h2>
          <p>
            <a href={LINUX_TARBALL_URL}>
              Download TAR.GZ Build
            </a>
          </p>
        </article>

        <article className={styles.card}>
          <h2>Linux Run Command</h2>
          <p className={styles.command}>
            chmod +x AFA-1.0.0.AppImage
            <br />
            ./AFA-1.0.0.AppImage
          </p>
        </article>

        <article className={styles.card}>
          <h2>Page URL</h2>
          <p>{PAGE_URL}</p>
        </article>
      </section>
    </main>
  );
}

export default TextToSpeech;
