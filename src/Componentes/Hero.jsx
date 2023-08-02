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

                  {/* <Link className="nav-link" to="/Portfalio">
                           Portfolio
                        </Link> */}

                  <a  className="btn btn-brand btn-lg a" href="/Subscripcion">
                     Empecemos
                  </a>
               </div>
            </div>
         </div>
      </div >
   );
};

export default Hero;
