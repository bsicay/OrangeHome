import React, { useState } from "react"
import "./header.css"
import { nav } from "../../data/Data"
import { Link } from "react-router-dom"

const Header = () => {
  const [navList, setNavList] = useState(false)

  return (
    <>
      <header>
        <div className='logo-container'>
          <div className='logo'>
            <img src='https://cdn.discordapp.com/attachments/717418780065529856/1307492599011217498/OHWH.png?ex=673a80df&is=67392f5f&hm=686a7d593a5bd16ed91c06829f5fbc80d8deeb6369ac11382dd31dfb23302b34&' alt='Orange Home Logo' />
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
          {/* <div className='button flex'>
            <h4>
              <span>2</span> My List
            </h4>
            <button className='btn1'>
              <i className='fa fa-sign-out'></i> Sign In
            </button>
          </div> */}

          <div className='toggle'>
            <button onClick={() => setNavList(!navList)}>
              {navList ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}
            </button>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
