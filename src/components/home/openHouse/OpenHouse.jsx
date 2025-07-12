import React, { useRef } from "react";
import "./openhouse.css";
import Heading from "../../common/Heading"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faVideo } from "@fortawesome/free-solid-svg-icons";


const OpenHouse = () => {
   const video1Ref = useRef(null);
  const video2Ref = useRef(null);

   const openPIP = async (videoRef) => {
    const video = videoRef.current;
    if (!video) return;
    try {
      // Asegúrate de que el vídeo cargue y comience a reproducirse
      await video.play();
      // Si ya hay otro PiP activo, salir
      if (document.pictureInPictureElement) {
        await document.exitPictureInPicture();
      }
      await video.requestPictureInPicture();
    } catch (err) {
      console.error("Error abriendo Picture-in-Picture:", err);
    }
  };

  return (
    <section className="openhouse">
      <div className="oh-title-wrapper">
        <div className="oh-rect oh-rect--left"></div>
        <div className="oh-rect oh-rect--right"></div>
        <h2 className="oh-title">Open House</h2>
      </div>
     
      <div className="oh-grid">
        {/* Columna 1: Flyer + descripción */}
        <div className="oh-flyer">
          <img
            src="/images/flyer-openhouse.png"
            alt="Flyer Open House"
          />
        </div>

        {/* Columna 2: Modelo 3D rotando */}
        <div className="oh-3dmodel">
          {/* Usamos model-viewer, no requiere librerías extra */}
          <model-viewer
            src="/images/modern_house.glb"
            alt="Modelo 3D de la casa"
            auto-rotate
            exposure="0.5"
            ar
            ar-modes="webxr"
            camera-controls
            disable-zoom 
            camera-orbit="0deg 75deg auto" 
            min-camera-orbit="-180deg 75deg auto" 
            max-camera-orbit="180deg 75deg auto" 
            shadow-intensity="3" 
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      </div>

      {/* Fila de vídeos */}
       <div className="oh-video-icons">
        <FontAwesomeIcon
          icon={faVideo}
          className="video-icon icon1"
          onClick={() => openPIP(video1Ref)}
        />
        <FontAwesomeIcon
          icon={faVideo}
          className="video-icon icon2"
          onClick={() => openPIP(video2Ref)}
        />
      </div>
      {/* Vídeos ocultos */}
      <video
        ref={video1Ref}
        src="/images/video1.mp4"
        style={{ display: "none" }}
      />
      <video
        ref={video2Ref}
        src="/images/video2.mp4"
        style={{ display: "none" }}
      />

    </section>
  );
};

export default OpenHouse;
