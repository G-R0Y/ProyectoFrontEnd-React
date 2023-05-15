import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Estilos/portafolio.css";
import { Link } from "react-router-dom";

const Details = () => {
  return (
    <div>
      <section className="main-inner-banner">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="banner-in-title">
                <h1 className="h2-title">Rutina de Piernas/Abs</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="main-portfolio-detail">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="portfolio-detail-title-box">
                <h2 className="h3-title">Rutina Supervisada</h2>
                <p>
                  El entrenamiento de pierna es clave para transformar el
                  cuerpo, ya sea para perder grasa o para ganar volumen. Un
                  entrenamiento enfocado en el tren inferior significa que más
                  de la mitad de tu cuerpo va a estar trabajando durante ese
                  entrenamiento. No solo vas a sentir que se te doblan las
                  piernas cuando vayas pasando por los distintos ejercicios, la
                  demanda de oxígeno va a ser brutal y el trabajo del corazón
                  para proveer de sangre y nutrientes a tus músculos va requerir
                  de un esfuerzo extra. Hoy quiero llevar tu entrenamiento de
                  piernas a un nivel superior, una mezcla de dominantes de
                  cadera con dominantes de rodilla. Estimulación auténticamente
                  espartana para que con el transcurso de las semanas tus
                  piernas ganen tamaño.
                </p>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="portfolio-detail-info-box">
                <div className="portfolio-detail-info-content">
                  <div className="portfolio-detail-info-text">
                    <span>Frecuencia Recomendada:</span>
                    <span>Cada 4 dias</span>
                  </div>
                  <div className="portfolio-detail-info-text two">
                    <span>Entrenador:</span>
                    <span>David Copper</span>
                  </div>
                </div>
                <div className="portfolio-detail-info-content two">
                  <div className="portfolio-detail-info-text">
                    <span>Día de inscripción:</span>
                    <span>Los días 7 de cada mes</span>
                  </div>
                  <div className="portfolio-detail-info-text two">
                    <span>Sede :</span>
                    <span>Para todas las sedes de Fitness, Gym</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div
                className="portfolio-detail-img-cfw one wow fadeInUp"
                data-wow-delay=".5s"
              >
                <img src="../src/assets/img/10.jpg" alt="portafolio" />
              </div>
              <h2 className="h3-title">
                Factores para un entrenamiento de piernas
              </h2>
              <div className="portfolio-detail-points">
                <div className="row">
                  <div className="col-lg-6 col-md-6">
                    <div className="points">
                      <ul>
                        <li>
                          <div className="point-object"></div>
                          <p>
                            Calentamiento general en maquina de cardio (5
                            minutos) y articular (5 minutos) para mejorar el
                            rango de movimiento de las articulaciones.
                            Activación de glúteos con bandas elásticas.
                          </p>
                        </li>
                        <li>
                          <div className="point-object"></div>
                          <p>
                            Activación del sistema nervioso. Realiza series de
                            aproximación para los ejercicios con los que vayas a
                            comenzar tu rutina si son grupos musculares
                            diferentes. En esta rutina solo deberías para
                            sentadillas.
                          </p>
                        </li>
                        <li>
                          <div className="point-object"></div>
                          <p>
                            Control de la técnica. Usamos los ejercicios
                            multiarticulares para cargar más peso y dado que la
                            mayor parte son con peso libre, vas a necesitar ser
                            un master en la técnica antes de comenzar a subirle
                            discos a la barra.
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="points">
                      <ul>
                        <li>
                          <div className="point-object"></div>
                          <p>
                            Conexión mente-músculo. Es fundamental sentir como
                            se activan tus músculos durante el recorrido del
                            movimiento. Te va a mantener alejado de lesiones y
                            va a aumentar el desarrollo muscular notablemente.
                          </p>
                        </li>
                        <li>
                          <div className="point-object"></div>
                          <p>
                            Puente de cadera:Mantén talones, escapulas y cabeza
                            en el suelo siempre y aprieta tus glúteos y tu
                            abdomen
                          </p>
                        </li>
                        <li>
                          <div className="point-object"></div>
                          <p>
                            Abducción de cadera: Actívalos con este sencillo
                            ejercicio y añade una goma o lastre si te resulta
                            muy liviano.
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="portfolio-detail-img-box">
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div
                      className="portfolio-detail-img-cfw two wow fadeInUp"
                      data-wow-delay=".5s"
                    >
                      <img src="../src/assets/img/blog-exp-600x369.jpg" alt="Portfolio" />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div
                      className="portfolio-detail-img-cfw three wow fadeInDown"
                      data-wow-delay=".5s"
                    >
                      <img src="../src/assets/img/blog-exp1-600x369.jpg" alt="Portfolio" />
                    </div>
                  </div>
                </div>
              </div>
              <h3 className="h3-title">Otras opciones de entrenamiento</h3>
              <p>
                Definir piernas corriendo es posible y te contamos por qué. El
                running es un ejercicio aeróbico de alta intensidad con el que
                aceleras tu ritmo cardiaco y tu respiración. Es el ejercicio
                perfecto para perder peso y mantenerte en forma, además de ser
                económico puesto que solo necesitas calzarte las zapatillas y
                salir a correr. En el momento que mantienes la carrera durante
                más de 20 minutos estarás trabajando la resistencia y eso
                significa que estarás trabajando los principales grupos
                musculares de las piernas: cuádriceps, isquiotibiales,
                pantorrillas y glúteos. ¿El resultado? Con constancia (traducida
                en kilómetros) una tonificación de piernas sin aumento del
                volumen. Y eso es lo que buscábamos
              </p>
              <div className="portfolio-detail-arrow-box">
                <div className="portfolio-detail-arrow left">
                  <Link className="nav-link" to="/Portofolio">
                    <i className="fa fa-arrow-left" aria-hidden="true"></i>
                    <span>Previous</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Details;
