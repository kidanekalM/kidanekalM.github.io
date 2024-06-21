import styles from './style.module.css'

export default function Footer() {
    return<footer className={styles.container}>
        <nav>
            <ul className={styles.list}>
                {/* <li><a className={styles.anch} href="https://TikTok.com/HAFCOM">TikToK</a></li> */}
                {/* <li><a className={styles.anch} href="https://Youtube.com/">YouTube</a></li> */}
                <li><a className={styles.anch} href="tel:+251922335151">Phone</a></li>
                <li><a className={styles.anch} href="mailto:akidanekal@gmail.com">E-mail</a></li>
            </ul>
        </nav>
    </footer>
}