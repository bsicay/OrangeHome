import React,  { useState }  from "react"
import Slider from "react-slick"
import "./hero.css"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "../../common/header/header.css"
import { nav } from "../../data/Data"
import { Link } from "react-router-dom"


const Hero = () => {
  const carouselImages = [
    "../../../../images/banner.png",
    "../../../images/banner2.png",
    "images/banner.png",
  ]
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    arrows: false,
  }
  const [navList, setNavList] = useState(false)

  return (
    <>
      <section className='hero'>
        <div className='left-container'>
          <div className='mainTitle'>
            <h1>Descubre la casa de tus</h1>
            <h1 className='mainSubtitle'>sueños</h1>
          </div>
        </div>
        <div className='right-banner'>
          <div className="slider-container">
            <Slider {...settings}>
              {carouselImages.map((image, index) => (
                <div key={index}>
                  <img src={image} alt={`Slide ${index + 1}`} className='carousel-image' />
                </div>
              ))}
            </Slider>
          </div>
          <div className='mainTitle-mobile'>
            <h1>Descubre la casa de tus</h1>
            <h1 className='mainSubtitle'>sueños</h1>
          </div>
          <form className='flex'>
            <div className='box'>
              <span>Área</span>
              <input type='text' placeholder='Elige el área' />
            </div>
            <div className='box'>
              <span>Dormitorios</span>
              <input type='text' placeholder='Cantidad de dormitorios' />
            </div>
            <div className='box'>
              <span>Tipo</span>
              <input type='text' placeholder='Tipo de vivienda' />
            </div>
            <div className='box'>
              <h4>Filtro avanzado</h4>
            </div>
            <button className='btn1'>
              <i className='fa fa-search'></i>
            </button>
          </form>
        </div>
      </section>
    </>
  )
}

export default Hero
