import React, { useState, useEffect } from 'react'; // Para manejar el estado del modal
import Modal from 'react-modal'; // Usaremos esta librería para el visor de imágenes
import Back from "../common/Back"

import { useParams } from 'react-router-dom';
import { list } from '../data/Data';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './HouseDetail.css';
import { FaBed } from 'react-icons/fa'; // Ícono para características
import { FaCheckCircle } from 'react-icons/fa'; // Ícono para amenidades
import { MapContainer } from 'https://cdn.esm.sh/react-leaflet/MapContainer'
import { TileLayer } from 'https://cdn.esm.sh/react-leaflet/TileLayer'
import { useMap } from 'https://cdn.esm.sh/react-leaflet/hooks'
import Heading from "../common/Heading"
import img from "../images/services.jpg"

const HouseDetail = () => {
  const { id } = useParams();
  const houseId = parseInt(id, 10);
  const house = list.find(item => item.id === houseId);

  if (!house) {
    return <div>Casa no encontrada</div>;
  }

  const { name, location, description, embeded, images, details, features, amenidades, featuredImages } = house;

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);


  const openModal = (index) => {
    setCurrentImageIndex(index);
    setModalIsOpen(true);
  };

  
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    window.addEventListener('resize', handleResize);
    
    // Limpieza del listener al desmontar el componente
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? featuredImages.length - 1 : prevIndex - 1));
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === featuredImages.length - 1 ? 0 : prevIndex + 1));
  };



  const settings = {
    dots: true,
    infinite: true,
    speed: 1600,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: !isMobile,
    centerPadding: isMobile ? "0%" : "30%",
    arrows: true,
    autoplay: true,
    autoplaySpeed: 1000,
  };

  // Convertir los detalles en un array de pares clave-valor
  const detailsArray = Object.entries(details[0]);

  const groupedDetails = [];
  for (let i = 0; i < detailsArray.length; i += 5) {
    groupedDetails.push(detailsArray.slice(i, i + 5));
  }

  // Agrupar las características en columnas de 2 elementos
  const groupedFeatures = [];
  for (let i = 0; i < features.length; i += isMobile ? 8 :4) {
    groupedFeatures.push(features.slice(i, i + isMobile ? 8 :4));
  }

  // Agrupar las amenidades en columnas de 5 elementos
  const groupedAmenities = [];
  for (let i = 0; i < amenidades.length; i +=isMobile ? 8 : 3) {
    groupedAmenities.push(amenidades.slice(i, i + isMobile ? 8 :3));
  }

  return (
    <div>
      {/* Contenedor del Título */}
      {/* <div className='title-container'>
        <h1>Detalle de la Casa</h1>
      </div> */}
      <Back name='Casa' title='Detalles de la casa' cover={img} />
      {/* Carrusel de Imágenes */}
      <div className='carousel'>
        <Slider {...settings}>
          {images.map((imageUrl, index) => (
            <div key={index}>
              <img src={imageUrl} alt={`Imagen ${index + 1}`} />
            </div>
          ))}
        </Slider>
      </div>

      <div className='type-container'>
        <h3>En venta</h3>
      </div>

      {/* Información de la Casa */}
      <div className='house-info'>
        <h1>{name}</h1>
        <p><i className='fa fa-location-dot'></i> {location}</p>
        <h2 className='section-title'>Descripción</h2>
        <p>{description}</p>

        <h2 className='section-title'>Detalles de la Propiedad</h2>
        <div className='details-container'>
            {groupedDetails.map((group, index) => (
                <div className='details-column' key={index}>
                {group.map(([key, value]) => (
                    <div className='detail-item' key={key}>
                    <strong>{key}:</strong> {value}
                    </div>
                ))}
                </div>
            ))}
        </div>
      </div>


    {/*Recorrido */}
    {embeded && (
      <>
        <h2 className='section-title'>Recorrido Virtual</h2>
        <div className=''>
          <iframe 
            width="100%" 
            height="640" 
            frameBorder="0" 
            allow="xr-spatial-tracking; gyroscope; accelerometer" 
            allowFullScreen 
            scrolling="no" 
            src="https://kuula.co/share/hldcn/collection/7bYY8?logo=1&info=0&fs=1&vr=1&sd=1&initload=0&thumbs=1"
          ></iframe>
        </div>
      </>
    )}



      {/* Sección de Características */}
      <div className='features-section'>
        <h2 className='section-title'>Características y Detalles</h2>
        <div className='features-container'>
          {groupedFeatures.map((group, index) => (
            <div className='features-column' key={index}>
              {group.map((feature, idx) => (
                <div className='feature-item' key={idx}>
                  <FaBed className='feature-icon' />
                  <span className='feature-text'>{feature}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

         {/* Galería */}
      <div className='gallery-section'>
      <h2 className='section-title'>Desde Nuestra Galería</h2>
        <div className='gallery-grid'>
          <div className='gallery-column'>
            <img src={featuredImages[0]} alt='Imagen 1' onClick={() => openModal(0)} />
            <img src={featuredImages[1]} alt='Imagen 2' onClick={() => openModal(1)} />
          </div>
          <div className='gallery-column single-image'>
            <img src={featuredImages[2]} alt='Imagen 3' onClick={() => openModal(2)} />
          </div>
        </div>
      </div>

      {/* Modal */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Galería de Imágenes"
        className="modal"
        overlayClassName="overlay"
      >
        <button onClick={closeModal} className="close-modal">X</button>
        <div className="modal-content">
          <button onClick={handlePrevImage} className="nav-button left">&lt;</button>
          <img src={featuredImages[currentImageIndex]} alt={`Imagen ${currentImageIndex + 1}`} />
          <button onClick={handleNextImage} className="nav-button right"> &gt; </button>
        </div>
      </Modal>

      {/* Nueva Sección: Amenidades */}
      <div className='amenities-section'>
        <h2 className='section-title'>Amenidades</h2>
        <div className='amenities-container'>
          {groupedAmenities.map((group, index) => (
            <div className='amenities-column' key={index}>
              {group.map((amenity, idx) => (
                <div className='amenity-item' key={idx}>
                  <FaCheckCircle className='amenity-icon' />
                  <span className='amenity-text'>{amenity}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HouseDetail;
