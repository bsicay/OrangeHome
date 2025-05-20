import React from "react"
import Heading from "../../common/Heading"
import { team } from "../../data/Data"
import "./team.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'


const Team = () => {
  const primaryAgent = team.find((val) => val.isPrimary);
  const otherAgents = team.filter((val) => !val.isPrimary);
  return (
    <>
      <section className='team background'>
        <div className='container'>
          <Heading title='Nuestros agentes' subtitle='Ponte en contacto con nuestros agentes y recibe la asesoría personalizada que necesitas para encontrar la casa de tus sueños. Estamos aquí para ayudarte en cada paso del proceso.' />

          {/* Agente principal destacado */}
          {primaryAgent && (
            <div className='primary-agent'>

              <div className='box'>
                <div className='details'>
                  <div className='imgPrimary'>
                    <img src={primaryAgent.cover} alt='' />
                    <i className='fa-solid fa-circle-check'></i>
                  </div>
                  <i className='fa fa-location-dot'></i>
                  <h3 className="primary-name">{primaryAgent.name}</h3>
                  <div className='button flex'>
                    <a
                      href="https://wa.me/50230531785?text=Hola,%20estoy%20interesado%20en%20una%20propiedad%20de%20OrangeHome"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="whatsapp-btn"
                    >
                      <FontAwesomeIcon icon={faWhatsapp} style={{
                        fontSize: "30px",
                      }} />
                      WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
          {/* Resto del equipo */}
          <div className='content mtop grid3'>
            {otherAgents.map((val, index) => (
              <div className='box' key={index}>
                <div className='details'>
                  <div className='img'>
                    <img src={val.cover} alt='' />
                    <i className='fa-solid fa-circle-check'></i>
                  </div>
                  <i className='fa fa-location-dot'></i>
                  <h4>{val.name}</h4>
                  <div className='button flex'>
                    <button>
                      <i className='fa fa-envelope'></i>
                      Mensaje
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Team
