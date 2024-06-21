import styles from './styles.module.css'
interface props{
    imgSrc:string;
    title:string;
    desc:string;
    side:string;
    callToAction:string;
    link:string;

}
export default function ProductCard({imgSrc,title,desc,side,callToAction,link}:props){
    if(side.toLocaleLowerCase() === "left" ){
        return<>
            <div className={styles.container}>
                <div className={styles.caption}>
                    <h5 className={styles.title}>{title}</h5>
                    <p className={styles.desc}>{desc}</p>
                    <a href={link}><button className={styles.call}>{callToAction}</button></a>
                </div>
                <img className={styles.image} src={imgSrc} alt={title} />
            </div>
        </>
    }
    return<>
        <div className={styles.container}>
            <img className={styles.image} src={imgSrc} alt={title} />
            <div className={styles.caption}>
                <h5 className={styles.title}>{title}</h5>
                <p className={styles.desc}>{desc}</p>
                <a href={link}><button className={styles.call}>{callToAction}</button></a>
            </div>
        </div>
</>

}