import styles from './styles.module.css'
interface props{
    title: string,
    pic:string,
    desc:string
}
export default function ProjectDetail({title, pic, desc}:props){
    return<>
        <figure className={styles.container}>
            <img className={styles.pic} src={pic} alt={title+"pic"}/>
            <figcaption className={styles.caption}>
                <h1 className={styles.title}>{title}</h1>
                <p className={styles.desc}>{desc}</p>
            </figcaption>
        </figure>
    </>
}