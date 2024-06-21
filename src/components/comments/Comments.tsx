import styles from './styles.module.css'
import Comment from '../comment/Comment'
// import clientPic from './../../pics/client.jpg'

let comments = [
                {name: "Organization",
                comment:"\"Kidanekal  ... \"",
                pic:"", }
            ] 

export default function Comments(){

    return<>
    <div className={styles.wrapper}>
        <div className={styles.container}>
            {comments.map(function(com){return <Comment name={com.name} pic={com.pic} comment={com.comment} />})}
        </div>
    </div>
    </>
}