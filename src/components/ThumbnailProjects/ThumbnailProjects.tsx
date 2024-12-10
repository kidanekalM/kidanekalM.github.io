import Thumbnail from "../thumbnail/Thumbnail";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";
// const API_URL  = import.meta.env.VITE_API_LOCATION
 

interface props {
  title: string;
  // thumbnails: Array<thumbnail>;
  callToAction: string;
  link: string;
  projs:Array<{__id:string,title:string,picUrl:string,desc:string}>;
  type:string
}
export default function ThumbnailProjects({  
  title,
  // thumbnails = dummythumbnails,
  callToAction,
  link,
  projs,
  type
}: props ) {
  // let [projs,setProjs] = useState([{__id:"",title:"",picUrl:"",desc:""}]);
  // useEffect(()=>{(fetch(API_URL+'projects').then(response=>response.json()).then(data=>setProjs(data)))})

  let res: Array<React.JSX.Element>;
  res = [];
  for (let i = 0; i < projs.length; i++) {
    res.push(
      <Thumbnail
        title={projs[i].title}
        imgSrc={projs[i].picUrl}
        desc={projs[i].desc}
        linkTo={"/"+type+"/"+projs[i].title}
      />
    );
  }

  return (
    <>
      <div className={styles.container}>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.listContainer}>{res}</div>
        <Link to={link} >
          <button className={styles.callToAction}>{callToAction}</button>
        </Link>
      </div>
    </>
  );
}
