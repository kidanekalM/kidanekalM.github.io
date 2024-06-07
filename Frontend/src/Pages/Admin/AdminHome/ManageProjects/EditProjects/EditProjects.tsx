
import { useParams } from 'react-router-dom'
import styles from './styles.module.css'
import { useEffect, useState } from 'react'
const API_URL  = import.meta.env.VITE_API_LOCATION

export default function EditProjects(){
    console.log("Edit proj");
    const {id} = useParams()
    console.log("the id is");
    console.log(id);
    useEffect(()=>{ 
        fetch(API_URL+"projects/"+id)
    .then( response=> response.json())
    .then( data=> {setProj(data); setLoading(false)})
    .catch(err=>console.log(err))},[])
    const [proj,setProj] = useState({id:"",title:'',desc:"",picUrl:''} )
    const {title,picUrl,desc} = proj
    const [txttitle,setTitle] = useState(title)
    const [pic,setPic] = useState(picUrl)
    const [txtdesc,setDesc] = useState(desc)
    const [loading,setLoading] = useState(true)
    if(!loading){

        return<>
    <div className={styles.wrapper}>
        <h1 className="title">Add Project</h1>
        <form action={API_URL+"projects/"+id} method="put" className={styles.formPar} encType='multipart/form-data'>
            <div className={styles.formEle}>
                <input type="text" value={id} name='__id' disabled className={styles.inp} />
                <label htmlFor="pic">Pic</label>
                <img src={pic} alt="" className={styles.pic} />
                <input className={styles.inp} type="file" name="picUrl" value={pic} onChange={(ev)=>{setPic(ev.target.value)}} accept="image/png, image/gif, image/jpeg" />
            </div>
            <div className={styles.formEle}>
                <label htmlFor="title">Title</label>
                <input type="text" name='title' value={txttitle} onChange={(ev)=>{setTitle(ev.target.value)}} required className={styles.inp}/>
            </div>
            <div className={styles.formEle}>
                <label htmlFor="desc">Description</label>
                <textarea name="desc" id="desc" value={txtdesc} onChange={(ev)=>{setDesc(ev.target.value)}} cols={30} rows={10} className={styles.inp}></textarea>
            </div>
            <div className={styles.formCont}>
                <input type="reset" value="reset" className={styles.btn} />
                <input type="submit" value="submit" className={styles.btn} />
            </div>
        </form>
    </div>
    </>
    }
}