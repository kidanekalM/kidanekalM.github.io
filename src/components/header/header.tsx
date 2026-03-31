import { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { GrClose } from "react-icons/gr";
import { Link, NavLink } from "react-router-dom";
import resumeData from "../../data/resume-data";
import headerStyle from "./headerStyle.module.css";

interface HeaderProps {
  logo: string;
}

const navigation = [
  { label: "Home", to: "/" },
  { label: "Projects", to: "/projects" },
  { label: "Qualifications", to: "/qualification" },
  { label: "Resume", to: "/cvwrapper" },
  { label: "TTS App", to: "/text_to_speech" },
];

function Header({ logo }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={headerStyle.header}>
      <div className={headerStyle.headerInner}>
        <Link to="/" className={headerStyle.brand} onClick={() => setMenuOpen(false)}>
          <img src={logo} alt="Kidanekal logo" className={headerStyle.logo} />
          <div>
            <p className={headerStyle.name}>{resumeData.personal.fullName}</p>
            <p className={headerStyle.role}>{resumeData.personal.tagline}</p>
          </div>
        </Link>

        <button
          type="button"
          className={headerStyle.menuButton}
          onClick={() => setMenuOpen((value) => !value)}
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
        >
          {menuOpen ? <GrClose size={22} /> : <HiMenu size={24} />}
        </button>

        <nav className={`${headerStyle.nav} ${menuOpen ? headerStyle.navOpen : ""}`}>
          {navigation.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `${headerStyle.navLink} ${isActive ? headerStyle.active : ""}`
              }
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
          <a className={headerStyle.contactLink} href={`mailto:${resumeData.personal.email}`}>
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
