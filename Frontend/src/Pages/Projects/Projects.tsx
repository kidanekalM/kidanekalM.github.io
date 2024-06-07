import forwImg from '../../pics/forward.svg'
import backImg from '../../pics/backward.svg'
import ThumbnailProjects from '../../components/ThumbnailProjects/ThumbnailProjects'
import ProjectDetail from '../../components/ProjectDetail/ProjectDetail'
import styles from './styles.module.css'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import projects from './projectes'
const API_URL = import.meta.env.VITE_API_LOCATION


export default function Projects() { 
    const [slider,setSlider] = useState(0)
    const [projs,setProjs] = useState(projects);
    const [curProj,setCurProj] = useState([{__id:"",title:"",picUrl:"",desc:""}]);
    const {title} = useParams()
    // useEffect(()=>{(fetch(API_URL+'projects').then(response=>response.json()).then(data=>{setProjs(data);} ))},[])
    // console.log(title);
    useEffect(()=>{if(projs.length>1){setCurProj(projs.filter((pr)=>{return pr.title === title}))}},[projs])
    if((title!=undefined)&&(projs)){
    return<>
        <div className={styles.controls} >
            <button  onClick={function(){setSlider(((slider==0)?curProj.length-1:slider-1))}} className={styles.control}><img src={backImg} alt="Go back" className={styles.controlImg} /></button>
            <button onClick={function(){setSlider((slider+1)%curProj.length)}} className={styles.control}><img src={forwImg} alt="Go forward" className={styles.controlImg} /></button>
        </div>
        {console.log(projs)}
        {console.log(slider)}
        <ProjectDetail title={curProj[slider].title} desc={curProj[slider].desc} pic={curProj[slider].picUrl} />
        <ThumbnailProjects title="" callToAction='Contact Us' link='tel:+251922335151' projs={projs}/>
    </>  
    }
    else{
        return  <ThumbnailProjects title="" callToAction='Contact Us' link='tel:+251922335151' projs={projs}/>

    }
}