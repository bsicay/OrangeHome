import React, { useState } from "react"
import "./header.css"
import { nav } from "../../data/Data"
import { Link } from "react-router-dom"
import img from '../../../../public/images/OHWH.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [navList, setNavList] = useState(false)

  return (
    <>
      <header>
        <div className='logo-container'>
          <div className='logo'>
            <img src={img} alt='Orange Home Logo' />
          </div>
        </div>
        <div className='nav-container'>
          <div className='nav'>
            <ul className={navList ? "small" : "flex"}>
              {nav.map((list, index) => (
                <li key={index}>
                  <Link to={list.path}>{list.text}</Link>
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
