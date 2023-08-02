import React from "react";
import "../../Estilos/Juan.css";
import "../../Script/Juan.js";
import imgBenefit from "../../assets/img/benefit-1.jpg";

const ParteBeneficios = () => {
   return (
      <>
         <section id="benefit" className="benefit">
            <div className="container">
               <div className="row clearfix">
                  <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
                     <div className="benefit-sec-title">
                        <div className="title">NUESTROS BENEFICIOS</div>
                        <h2>
                           TODO ES <br /> POSIBLE CON NOSOTROS
                        </h2>
                     </div>

                     <div className="benefit-block">
                        <div className="row">
                           <div className="col-md-1">
                              <div className="fa-3x">
                                 <i className="fa-solid fa-carrot fa-beat"></i>
                              </div>
                           </div>
                           <div className="col-md-11">
                              <div className="block-inner">
                                 <strong>40 cursos a la semana</strong>
                                 <div className="feature-text">
                                    Todos los días todo nuestro equipo trabaja para brindarle nuestras habilidades, conocimiento y pasión
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="benefit-block">
                        <div className="row">
                           <div className="col-md-1">
                              <div className="fa-3x">
                                 <i className="fa-solid fa-user-doctor fa-beat"></i>
                              </div>
                           </div>
                           <div className="col-md-11">
                              <div className="block-inner">
                                 <span className="icon icon flaticon-fitness-2"></span>
                                 <strong>Más de 35 entrenadores profesionales</strong>
                                 <div className="feature-text">
                                    Los mejores entrenadores a tu servicio apoyandote fisica y mentalmente para logres tu objetivo.
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="benefit-block">
                        <div className="row">
                           <div className="col-md-1">
                              <div className="fa-3x">
                                 <i className="fa-solid fa-heart fa-beat"></i>
                              </div>
                           </div>
                           <div className="col-md-11">
                              <div className="block-inner">
                                 <strong>Capacitación grupal efectiva</strong>
                                 <div className="feature-text">
                                    Citamos a reuniones grupales programadas donde podras relacionarte con personas que pasaron por tu proceso y animarte en el tuyo.
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
                     <div className="benefit-img">
                        <img src={imgBenefit} alt="" />
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default ParteBeneficios;
