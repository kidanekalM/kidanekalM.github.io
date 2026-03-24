import styles from './styles.module.css';

const INSTALLER_PATH = '/downloads/text-to-speech-installer.dmg';
const PAGE_URL = 'https://kidanekal.vercel.app/text_to_speech';
const DOWNLOAD_URL = 'https://kidanekal.vercel.app/downloads/text-to-speech-installer.dmg';

function TextToSpeech() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <p className={styles.eyebrow}>App Installer</p>
        <h1>Text to Speech</h1>
        <p className={styles.lead}>
          A simple macOS desktop app installer page for direct distribution.
          Download the `.dmg` and install it on Mac.
        </p>

        <div className={styles.actions}>
          <a className={styles.primaryAction} href={INSTALLER_PATH} download>
            Download macOS Installer
          </a>
          <a className={styles.secondaryAction} href={DOWNLOAD_URL}>
            Open Direct Download
          </a>
        </div>
      </section>

      <section className={styles.cardGrid}>
        <article className={styles.card}>
          <h2>Platform</h2>
          <p>macOS</p>
        </article>

        <article className={styles.card}>
          <h2>Installer</h2>
          <p>DMG package, 105 MB</p>
        </article>

        <article className={styles.card}>
          <h2>Direct URL</h2>
          <p>{DOWNLOAD_URL}</p>
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
