import { useEffect, useState } from 'react'
import styles from './styles.module.css'
import { Link } from 'react-router-dom'
 const API_URL  = import.meta.env.VITE_API_LOCATION
 console.log(import.meta.env.VITE_API_LOCATION);
export default function ManageProjects() {
    let [projects,setProjects] = useState([{
        _id:"",
        title:"",
        picUrl:"",
        desc:""

    }])
    useEffect(()=>{ 
        fetch(API_URL+"projects/")
    .then( response=> response.json())
    .then( data=> setProjects(data))
    .catch(err=>console.log(err))},[])
    
    // console.log(projects);
    return<>
    <div className={styles.wrapper}>
        <h1 className={styles.title}>Manage Project</h1>
        <table className={styles.tableEle}> 
            <tr>
                <th>Thumbnail</th>
                <th>Title</th>
                <th>Desc</th>
                <th>Edit</th>
                <th>Delete</th>
            </tr>
            {projects.map(proj=>{return <tr>
                <td><img className={styles.thumbnail} src={proj.picUrl} alt={proj.title} /></td>
                <td>{proj.title}</td>
                <td>{proj.desc}</td>
                <td><Link to={"./EditProjects/"+ proj._id}><button id='edit' className={styles.control}>Edit</button></Link></td>
                <td><button id='delete'  className={styles.control}>Delete</button></td>
            </tr>})}

        </table>
    </div>
    </>
}