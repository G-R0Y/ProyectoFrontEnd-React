import React from "react";
import "../Estilos/Juan.css";
import "../Script/Juan.js";

const Hero = () => {
   return (
      <div className="slideshow slidefirst">
         <div className="container">
            <div className="row">
               <div className="col-12 text-center text-white">
                  <h2 className="text-white text-uppercase h2">
                     LA VIDA ES UNA CARRERA
                     </h2>
                  <h1 className="display-3 my-4 h1">
                     EL MEJOR
                        <br />
                        LUGAR FITNESS
                        <br />
                        DE LA CIUDAD
                     </h1>
                  <a href="#" className="btn btn-brand a">
                     Empecemos
                     </a>
               </div>
            </div>
         </div>
      </div >
   );
};

export default Hero;
