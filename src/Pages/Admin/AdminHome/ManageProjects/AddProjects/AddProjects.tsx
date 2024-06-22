
import { useState } from 'react'
import styles from './styles.module.css'

const API_URL  = import.meta.env.VITE_API_LOCATION

export default function AddProjects(){
    const [txttitle,setTitle] = useState("")
    const [pic,setPic] = useState("")
    const [txtdesc,setDesc] = useState("")
    
    return<>
    <div className={styles.wrapper}>
        <h1 className="title">Add Project</h1>
        <form action={API_URL+"projects"} method="Post" onSubmit={submitEve} className={styles.formPar} encType='multipart/form-data'>
            <div className={styles.formEle}>
                <label htmlFor="pic">Pic</label>
                <input className={styles.inp} type="file" name="pic" onChange={(e)=>{setPic(e.target.value)}} accept="image/png, image/gif, image/jpeg" />
            </div>
            <div className={styles.formEle}>
                <label htmlFor="title">Title</label>
                <input type="text" name='title' required className={styles.inp} onChange={(e)=>{setTitle(e.target.value)}}/>
            </div>
            <div className={styles.formEle}>
                <label htmlFor="desc">Description</label>
                <textarea name="desc" id="desc" cols={30} rows={10} className={styles.inp} onChange={(e)=>{setDesc(e.target.value)}}></textarea>
            </div>
            <div className={styles.formCont}>
                <input type="reset" value="reset" className={styles.btn} />
                <input type="submit" value="submit" className={styles.btn} />
            </div>
        </form>
    </div>
    </>

    function submitEve(ev:React.FormEvent<HTMLFormElement>) {
        // ev.preventDefault()
        ev =ev
        send(txttitle,txtdesc,pic)
    }
}

function send(title:string,picUrl:string,desc:string){
    title = title
    picUrl = picUrl
    desc = desc
    // const requestOptions = ;
    /*
    fetch(API_URL+"projects/", {    
        method: 'POST',
        mode:"no-cors",
        headers: { 'Content-Type': 'application/json' , 'mode':'no-cors'},
        body: JSON.stringify({ title: title,picUrl:picUrl,desc:desc })
    })
        .then(response => response.json())
        .then(data =>alert(JSON.stringify(data)));
        */
}
