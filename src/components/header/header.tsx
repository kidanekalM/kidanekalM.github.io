 import headerStyle from "./headerStyle.module.css"
 import {Link} from 'react-router-dom'
import {HiMenu} from 'react-icons/hi'
import {GrClose} from 'react-icons/gr'
 import { useState } from 'react';
 interface prop{
    logo:string;
 }
 function Header({logo}:prop){
    let [menu,setMenu] = useState(false)
    let [title,setTitle] = useState("")
   return <>
    <header className={headerStyle.header}>
        <Link to={"../"} onClick={()=> {setTitle("")}}> <div className={headerStyle.logo} ><img src={logo} alt="Portifolio Logo" /></div> </Link> 
        <h1 className={headerStyle.title}>{title}</h1>
        <GrClose size={40} className={menu? headerStyle.closeBtn:headerStyle.displayNone} onClick={function(){setMenu(false)}}/>
        <HiMenu size={40} className={headerStyle.openBtn} onClick={function(){setMenu(true)}}/>
        <nav className={menu?headerStyle.nav:headerStyle.menuHidden} >
            <ul className={headerStyle.list}>
                <Link to="/Projects"  onClick={function(){setMenu(false); setTitle("Projects")}}>
                <li>
                    Projects
                </li>
                </Link>
                <Link to="/Qualification"  onClick={function(){setMenu(false); setTitle("Qualification")}}>
                <li>
                    Qual
                </li>
                </Link>
                {/* <Link to="/Services" onClick={function(){setMenu(false); setTitle("Services")}}>
                    <li>
                        Services
                    </li>
                </Link>
                <Link to="/Products" onClick={function(){setMenu(false); setTitle("Products")}}>
                    <li>
                        Products
                    </li>
                </Link> */}
            </ul>
        </nav>
    </header>
    </>
}
export default Header