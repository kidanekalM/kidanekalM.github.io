import styles from './styles.module.css'
interface prop{
    imgSrc:string;
    title:string;
    desc:string;
    linkTo:string;
}
export default function Thumbnail({imgSrc,title,desc,linkTo}:prop) {
    return <>
        <a href={linkTo}>
            <div className={styles.container}>
                <img className={styles.media} src={imgSrc} alt={title} loading="lazy" />
                <h4 className={styles.title}>{title}</h4>
                <p className={styles.desc}>{desc}</p>
            </div>
        </a>
    </>
}