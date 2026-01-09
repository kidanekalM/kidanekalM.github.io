import styles from './style.module.css'

export default function Footer() {
    const year = new Date().getFullYear();
    return (
      <footer className={styles.container}>
        <div className={styles.inner}>
          <nav>
            <ul className={styles.list}>
              <li><a className={styles.anch} href="tel:+251922335151">Phone</a></li>
              <li><a className={styles.anch} href="mailto:akidanekal@gmail.com">E-mail</a></li>
            </ul>
          </nav>
          <div className={styles.copy}>
            © {year} Kidanekal Alem. All rights reserved.
          </div>
        </div>
      </footer>
    );
}