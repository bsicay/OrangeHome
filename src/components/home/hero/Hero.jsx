import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "./hero.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../common/header/header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { location } from "../../data/Data";
import { list } from "../../data/Data";
import { useContext } from "react"
import { FilterContext } from "../../../context/FilterContext";


const Hero = () => {
  const carouselImages = [
    "images/banner.png",
    "images/banner2.png",
    "images/banner4.png",
  ];

  const uniqueLocations = [...new Set(list.map(item => item.location))];

  const [selectedArea, setSelectedArea] = useState("");
  const [areaSuggestions, setAreaSuggestions] = useState(location.map(loc => loc.name));
  const [selectedBedrooms, setSelectedBedrooms] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const { setFilters } = useContext(FilterContext);


  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    fade: true,
    arrows: false,
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setFilters({
      area: selectedArea,
      bedrooms: selectedBedrooms,
      type: selectedType
    });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);



  return (
    <>
      <section className="hero">
        <div className="left-container">
          <div className="mainTitle">
            <h1>Descubre la casa de tus</h1>
            <h1 className="mainSubtitle">sueños</h1>
          </div>
        </div>
        <div className="right-banner">
          <div className="slider-container">
            <Slider {...settings}>
              {carouselImages.map((image, index) => (
                <div key={index}>
                  <img
                    src={image}
                    alt={`Slide ${index + 1}`}
                    className="carousel-image"
                  />
                </div>
              ))}
            </Slider>
          </div>
          <div className="mainTitle-mobile">
            <h1>Descubre la casa de tus</h1>
            <h1 className="mainSubtitle">sueños</h1>
          </div>
          <form className="flex">
            <div className="box">
              <span>Área</span>
              <select
                className="options"
                value={selectedArea}
                onChange={(e) => setSelectedArea(e.target.value)}
              >

              <option value="">Seleccione</option>
                  {uniqueLocations.map((loc, index) => (
                    <option key={index} value={loc}>
                      {loc}
                </option>
              ))}
              </select>
              
              {/* {selectedArea && (
                <ul className="dropdown">
                  {areaSuggestions
                    .filter((name) =>
                      name.toLowerCase().includes(selectedArea.toLowerCase())
                    )
                    .map((suggestion, index) => (
                      <li
                        key={index}
                        onClick={() => setSelectedArea(suggestion)}
                      >
                        {suggestion}
                      </li>
                    ))}
                </ul>
              )} */}
            </div>
            <div className="box">
              <span>Dormitorios</span>
              <select  className="options"
                value={selectedBedrooms}
                onChange={(e) => setSelectedBedrooms(e.target.value)}
              >
                <option value="">Seleccione</option>
                {Array.from({ length: 6 }, (_, i) => i + 1).map((num) => (
                  <option key={num} value={num}>
                    {num}
                  </option>
                ))}
              </select>
            </div>
            <div className="box">
              <span>Tipo</span>
              <select
               className="options"
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
              >
                <option value="">Seleccione</option>
                <option value="Casas">Casas</option>
              </select>
            </div>
            <button className="btnHero" onClick={handleSearch}>
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Hero;
