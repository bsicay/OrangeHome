import React from "react"
import Back from "../common/Back"
import Heading from "../common/Heading"
import img from "../images/about.jpg"
import "./about.css"

const About = () => {
  return (
    <>
      <section className='about'>
        <Back name='Nosotros' title='Sobre nosotros - ¿Quiénes somos?' cover={img} />
        <div className='container flex mtop'>
          <div className='left row'>
            <Heading title='Nuestra Visión' subtitle='' />

            <p>Ser una empresa reconocida por ofrecer soluciones innovadoras, de alta calidad y asequibles, que satisfagan las necesidades y expectativas de las familias guatemaltecas promoviendo el bienestar y desarrollo de las comunidades donde operamos.</p>
            {/* <button className='btn2'>More About Us</button> */}
          </div>
          <div className='right row'>
            <img src='./immio.jpg' alt='' />
          </div>
        </div>
      </section>
    </>
  )
}

export default About
