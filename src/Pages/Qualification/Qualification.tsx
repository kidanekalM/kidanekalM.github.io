import forwImg from '../../pics/forward.svg'
import backImg from '../../pics/backward.svg'
import ThumbnailProjects from '../../components/ThumbnailProjects/ThumbnailProjects'
import ProjectDetail from '../../components/ProjectDetail/ProjectDetail'
import styles from '../Projects/styles.module.css'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import QualRepo from './QualRepo'
const DATA_URL = '/data/site-data.json'


export default function Projects() { 
    const [slider,setSlider] = useState(0)
    const [projs,setProjs] = useState(QualRepo);
    const [curProj,setCurProj] = useState([{__id:"",title:"",link:"",picUrl:"",vidurl:"",desc:""}]);
    const {title} = useParams()
    useEffect(()=>{(
        fetch(DATA_URL)
          .then(response=>response.json())
          .then(data=>{
            if (Array.isArray(data?.qualifications) && data.qualifications.length>0) {
              const fallback = QualRepo as any[];
              const byKey = new Map(fallback.map(p=>[(p as any).__id ?? (p as any).title, p]));
              const merged = (data.qualifications as any[]).map(p=>{
                const key = (p as any).__id ?? (p as any).title;
                const base = byKey.get(key) || {};
                return { ...base, ...p };
              });
              setProjs(merged);
            }
          })
          .catch(()=>{})
      )},[])
    console.log(title);
    useEffect(()=>{if(projs.length>1){setCurProj(projs.filter((pr)=>{return pr.title === title}))}},[projs])
    if((title!=undefined)&&(projs)){
    return<>
        <div className={styles.controls} >
            <button  onClick={function(){setSlider(((slider==0)?curProj.length-1:slider-1))}} className={styles.control}><img src={backImg} alt="Go back" className={styles.controlImg} /></button>
            <button onClick={function(){setSlider((slider+1)%curProj.length)}} className={styles.control}><img src={forwImg} alt="Go forward" className={styles.controlImg} /></button>
        </div>
        {console.log(projs)}
        {console.log(slider)}
        <ProjectDetail title={curProj[slider].title}  link={curProj[slider].link} vidurl={curProj[slider].vidurl} desc={curProj[slider].desc} pic={curProj[slider].picUrl} />
        <ThumbnailProjects title="" type='Qualification' callToAction='Contact Us' link='tel:+251922335133' projs={projs}/>
    </>  
    }
    else{
        return  <ThumbnailProjects title="" type='Qualification' callToAction='Contact Us' link='tel:+251922335133' projs={projs}/>

    }
}