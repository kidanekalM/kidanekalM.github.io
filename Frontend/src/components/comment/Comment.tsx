import styles from './styles.module.css'
interface props{
    name:string,
    pic:string,
    comment:string
}

export default function Comment({name,comment}:props){
    return<>
        <div className={styles.container}>
            <div className={styles.profile}>
            {/* <img src={pic} alt="" className={styles.pic}/> */}
            <h6 className={styles.name} >{name}</h6>
            </div>
            <p className={styles.comment}>{comment}</p>
        </div>
    </>
}