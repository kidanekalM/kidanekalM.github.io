import forwImg from '../../pics/forward.svg'
import backImg from '../../pics/backward.svg'
import ThumbnailProjects from '../../components/ThumbnailProjects/ThumbnailProjects'
import ProjectDetail from '../../components/ProjectDetail/ProjectDetail'
import styles from './styles.module.css'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import projectRepo from './projectsRepo'
import resumeData from '../../data/resume-data'
const RESUME = resumeData


export default function Projects() { 
    const [slider,setSlider] = useState(0)
    const [projs,setProjs] = useState(projectRepo);
    const [curProj,setCurProj] = useState([{__id:"",title:"",link:"",picUrl:"",vidurl:"",desc:""}]);
    const {title} = useParams()
    useEffect(()=>{
        const fallback = projectRepo as any[];
        const byTitle = new Map(fallback.map(p=>[(p as any).title, p]));
        const mapped = (RESUME as any)?.projects?.map((p:any)=>{
          const base = byTitle.get(p.title) || {};
          return {
            __id: base.__id || p.id || p.title,
            title: p.title,
            link: p.link || base.link || '',
            picUrl: base.picUrl || '',
            vidurl: base.vidurl || '',
            desc: p.description || base.desc || ''
          }
        }) || [];
        if(mapped.length>0){ setProjs(mapped); }
      },[])
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
        <ThumbnailProjects title="" type='projects' callToAction='Contact Us' link='tel:+251922335133' projs={projs}/>
    </>  
    }
    else{
        return  <ThumbnailProjects title="" type='projects' callToAction='Contact Us' link='tel:+251922335133' projs={projs}/>

    }
}