import React from "react"
import Heading from "../../common/Heading"
import { team } from "../../data/Data"
import "./team.css"

const Team = () => {
  return (
    <>
      <section className='team background'>
        <div className='container'>
          <Heading title='Nuestros agentes' subtitle='Ponte en contacto con nuestros agentes y recibe la asesoría personalizada que necesitas para encontrar la casa de tus sueños. Estamos aquí para ayudarte en cada paso del proceso.' />

          <div className='content mtop grid3'>
            {team.map((val, index) => (
              <div className='box' key={index}>
                {/* <button className='btn3'>{val.list} Listings</button> */}
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
