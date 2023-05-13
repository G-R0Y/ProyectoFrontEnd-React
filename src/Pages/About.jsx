import React, { useState } from 'react';
import Footer from "../Componentes/Footer";
import img1 from "../assets/img/blur-1.png"
import img2 from "../assets/img/banner-overlay.png"
import img3 from "../assets/img/banner-img-1.png"
import img4 from "../assets/img/banner-circle-two.png"
import img5 from "../assets/img/banner-circle-one.png"
import img6 from "../assets/img/about-img-one.png"
import img7 from "../assets/img/fitness.png"



const About = () => {
   
   const handleOnDragStart = (e) => e.preventDefault()

   return (

      <>
         <section className="About">

            <div className="first">
               <div className="img1">
                  <img src={img1} alt="" />
               </div>
               <div className="img2">
                  <img src={img2} alt="" />
               </div>
               <div className="container">
                  <div className="row ">
                     <div className="col-lg-6 d-flex align-items-center">
                        <div className="part1">
                           <div className="d-flex gap-2 p-3 justify-content-center">
                              <h3 className="title"><span>EL MEJOR </span> GIMNASIO</h3>
                           </div>
                           <div className="text-center">
                              <h4 className="contenido">TRABAJA DURO PARA <br /> TENER UN VIDA MEJOR</h4>
                           </div>
                           <div className="text-center">
                              <h3>¡No hay nada que no puedas lograr con determinación y perseverancia!</h3>
                           </div>
                        </div>
                     </div>

                     <div className="col-lg-6">
                        <div className="part2">
                           <img src={img3} alt="" />
                           <div>
                              <img src={img4} alt="" />
                           </div>
                           <div>
                              <img src={img5} alt="" />
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            <div className="second">
               <div className="container">
                  <div className="row">
                     <div className="col-lg-6">
                        <div className="part2">
                           <img src={img6} alt="" />
                           <div>
                              <img src={img4} alt="" />
                           </div>
                           <div>
                              <img src={img5} alt="" />
                           </div>
                           <section className="fitnes">
                              <img src={img7} alt="" />
                           </section>
                        </div>
                     </div>
                     <div className="col-lg-6">
                        <div className="part3">
                           <h1>Bienvenidos a nuestro Gimnasio</h1>
                           <h3>Bienvenidos a <strong>Daily Fit</strong> . Nos enorgullece ser más que un simple centro de fitness, somos una comunidad dedicada a ayudar a las personas a alcanzar sus objetivos de salud y bienestar. Desde nuestro equipo de entrenadores altamente capacitados hasta nuestras instalaciones de vanguardia, todo en nuestro gimnasio ha sido diseñado para brindarte la mejor experiencia posible.</h3>
                           <h3>En <strong>Daily Fit</strong>, creemos que la clave para alcanzar tus objetivos de acondicionamiento físico es a través de un enfoque holístico que aborda tanto el cuerpo como la mente. Ofrecemos una amplia variedad de clases y programas para ayudarte a desarrollar tu fuerza, resistencia y flexibilidad, mientras que también trabajamos en mejorar tu salud mental y emocional.</h3>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            <div className="third">
               <div className="row">
                  <div className="col-lg-10">
                     <h1>Nuestros Entrenadores  </h1>
                     <div>
                       

                     
                        
                      
                        


                     </div>
                  </div>
               </div>
            </div>


         </section>
         {/* <Footer /> */}

      </>



   );
};

export default About;
