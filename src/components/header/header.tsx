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
      <div className={headerStyle.headerInner}>
        <Link to={"/"} onClick={()=> {setTitle("")}}>
          <div className={headerStyle.logo}>
            <img src={logo} alt="Portfolio logo" />
          </div>
        </Link>
        <h1 className={headerStyle.title}>{title}</h1>
        <GrClose size={36} className={menu? headerStyle.closeBtn:headerStyle.displayNone} onClick={function(){setMenu(false)}}/>
        <HiMenu size={36} className={headerStyle.openBtn} onClick={function(){setMenu(true)}}/>
        <nav className={menu?headerStyle.nav:headerStyle.menuHidden}>
          <ul className={headerStyle.list}>
            <Link to="/" onClick={function(){setMenu(false); setTitle("")}}>
              <li>Home</li>
            </Link>
            <Link to="/Projects" onClick={function(){setMenu(false); setTitle("Projects")}}>
              <li>Projects</li>
            </Link>
            <Link to="/Qualification" onClick={function(){setMenu(false); setTitle("Qualification")}}>
              <li>Qualification</li>
            </Link>
            <a href="tel:+251922335133" onClick={function(){setMenu(false); setTitle("Contact")}}>
              <li>Contact</li>
            </a>
          </ul>
        </nav>
      </div>
    </header>
    </>
}
export default Header