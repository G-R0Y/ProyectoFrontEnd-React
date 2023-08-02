import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Estilos/portafolio.css";
import BannerPortafolio from "./Portafolio/BannerPortafolio";
import RutinaPortafolio from "./Portafolio/RutinaPortafolio";
const Portofolio = () => {
  return (
    <>
      <BannerPortafolio />
      <RutinaPortafolio />
    </>
  );
};

export default Portofolio;
