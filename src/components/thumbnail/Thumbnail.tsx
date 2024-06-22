import styles from './styles.module.css'
interface prop{
    imgSrc:string;
    title:string;
    desc:string;
    linkTo:string;
}
export default function Thumbnail({imgSrc,title,desc,linkTo}:prop) {
    return<>
        <a href={linkTo}>
            <div className={styles.container} style={{backgroundImage:"url('"+imgSrc+"')"}}>
                <h4 className={styles.title}>{title}</h4>
                <p className={styles.desc}>{desc}</p>
            </div>
        </a>
    </>
}