
import { Link } from "react-router-dom"
import styles from './styles.module.css'
export default function AdminHome(){
    if("admin signed in"){
    return<>
    <div className={styles.wrapper}>
        <h1 className={styles.title}>Admin</h1>
        <ul className={styles.list}>
            <Link to={'./ManageProjects/'}><li className={styles.choice}>Manage Projects</li></Link>
            <Link to={'/ManagePRoducts/'}><li className={styles.choice}>Manage Products</li></Link>
        </ul>
    </div>
    </>
    }
    else{
        return <div>You are not signed in!</div>
    }
} 