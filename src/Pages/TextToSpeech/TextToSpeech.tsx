import styles from './styles.module.css';

const MAC_INSTALLER_PATH = '/downloads/text-to-speech-installer.dmg';
const WINDOWS_INSTALLER_PATH = '/downloads/text-to-speech-installer.exe';
const PAGE_URL = 'https://kidanekal.vercel.app/text_to_speech';
const MAC_DOWNLOAD_URL = 'https://kidanekal.vercel.app/downloads/text-to-speech-installer.dmg';
const WINDOWS_DOWNLOAD_URL = 'https://kidanekal.vercel.app/downloads/text-to-speech-installer.exe';

function TextToSpeech() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <p className={styles.eyebrow}>App Installer</p>
        <h1>Text to Speech</h1>
        <p className={styles.lead}>
          Download the latest desktop installer for macOS or Windows from one page.
        </p>

        <div className={styles.actions}>
          <a className={styles.primaryAction} href={MAC_INSTALLER_PATH} download>
            Download macOS Installer
          </a>
          <a className={styles.secondaryAction} href={WINDOWS_INSTALLER_PATH} download>
            Download Windows Installer
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
          <h2>macOS Direct URL</h2>
          <p>{MAC_DOWNLOAD_URL}</p>
        </article>

        <article className={styles.card}>
          <h2>Windows Direct URL</h2>
          <p>{WINDOWS_DOWNLOAD_URL}</p>
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
