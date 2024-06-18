import { useEffect, useState } from 'react'

import ThumbnailProjects from '../../components/ThumbnailProjects/ThumbnailProjects';
import Hero from '../../components/hero/hero'
import ProductCard from '../../components/productCard/ProductCard';

import Comments from '../../components/comments/Comments';
import styles from './Home.module.css'
import { Link } from 'react-router-dom';
// import img1 from '../../pics/project1.jpg'
import img2 from '../../pics/project2.jpg'
import img3 from '../../pics/project3.jpg'
const API_URL = import.meta.env.VITE_API_LOCATION
function Home() {
  const [projs,setProjs] = useState([
    // {__id:"",title:"",picUrl:img1,desc:""},
    {__id:"",title:"",picUrl:img2,desc:""},
    {__id:"",title:"",picUrl:img3,desc:""},
  ]);
  
  useEffect(()=>{(fetch(API_URL+'projects').then(response=>response.json()).then(data=>{setProjs(data); } ))},[])
  console.log(projs);

  return (
    <>
    <Hero backgroundImage={""} Name="Hi" motto='I am Kidanekal Alem'/>
    <Link to="projects">
      <ThumbnailProjects title="Previous Projects"   callToAction='Contact Us' link='tel:+251922335133' projs={projs}/>
    </Link>
      {/* <div className={styles.services}>
        <ProductCard side='right' title="" desc="" imgSrc={"arc"} callToAction='Contact' link="tel:+251922335133"/>
        <ProductCard side='left' title="" desc="" imgSrc={"con"} callToAction='Contact' link="tel:+251922335133"/>
        <ProductCard  side="right" title='' desc='' imgSrc={"mat"} callToAction='Contact' link='tel:+251922335133'/>
      </div> */}
    <Comments/>
    </>
  )
}

export default Home
