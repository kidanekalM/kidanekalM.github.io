import styles from './styles.module.css'
interface props{
    title: string,
    pic:string,
    desc:string,
    vidurl: string
}
export default function ProjectDetail({title, pic, desc, vidurl}:props){
    return<>
        <figure className={styles.container}>
            {(vidurl==null || vidurl=="")?<img className={styles.pic} src={pic} alt={title+"pic"}/>:<video className={styles.pic} autoPlay={true} src={vidurl}></video>}
            
            <figcaption className={styles.caption}>
                <h1 className={styles.title}>{title}</h1>
                <p className={styles.desc}>{desc}</p>
            </figcaption>
        </figure>
    </>
}