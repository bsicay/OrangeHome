import React, { useState } from "react"
import "./header.css"
import { nav } from "../../data/Data"
import { Link, useHistory} from "react-router-dom"
import img from '../../../../public/images/OHWH.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [navList, setNavList] = useState(false)
  const history = useHistory(); 

  const handleLogoClick = () => {

    if (window.location.pathname !== "/") {
      history.push("/");
      
      setNavList(false); // Cierra el menú si está abierto
    }

  }

  const handleLinkClick = () => {
    setNavList(false) // Cierra el menú al hacer clic en un enlace
  }

  return (
    <>
      <header>
        <div className='logo-container ' >
          <div className='logo' onClick={handleLogoClick}>
            <img src={img} alt='Orange Home Logo' />
          </div>
        </div>
        <div className='nav-container'>
          <div className='nav'>
            {/* Utilizamos la clase 'show' para controlar la visibilidad */}
            <ul className={`menu ${navList ? "show" : ""}`}>
              {nav.map((list, index) => (
                <li key={index}>
                  <Link to={list.path} onClick={handleLinkClick} >{list.text}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className='toggle'>
            <button className='iconB' onClick={() => setNavList(!navList)}>
              <FontAwesomeIcon icon={faBars} />
            </button>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
