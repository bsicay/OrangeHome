import React from "react"
import { footer } from "../../data/Data"
import "./footer.css"
import { useHistory } from "react-router-dom";

const Footer = () => {

  const history = useHistory();

  const handleClick = () => {


      history.push("/contact");
      

  }

  return (
    <>
      <section className='footerContact'>
        <div className='container'>
          <div className='send flex'>
            <div className='text'>
              <h1>¿Quieres Ponerte en Contacto?</h1>
              <p>Te acompañamos en el proceso de encontrar tu hogar perfecto.</p>
            </div>
            <button className='btnContact' onClick={handleClick}>Contáctanos Ahora</button>
          </div>
        </div>
      </section>

      <footer>
        <div className='container'>
          <div className='box'>
            <div className='logoF'>
              <img src='images/OHWH.png' alt='' />
              <h2>¿Necesitas ayuda con algo?</h2>
              <p>Actualizaciones, promociones exclusivas y descuentos, enviados directamente a tu correo cada mes.</p>
              <div className='input'>
                <input type='text' placeholder='Email Address' />
                <button className='btnSus' >Suscribirme</button>
              </div>
            </div>
          </div>

          {footer.map((val) => (
            <div className='box'>
              <h3>{val.title}</h3>
              <ul>
                {val.text.map((items) => (
                  <li> {items.list} </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </footer>
      <div className='legal'>
        <span>© 2024 OrangeHome. Designed By VisualCastle.</span>
      </div>
    </>
  )
}

export default Footer
