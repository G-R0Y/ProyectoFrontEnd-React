import React from "react";
import Footer from "../Componentes/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Estilos/portafolio.css";

const Portofolio = () => {
  return (
    <div>
      hola
      <section
        className="main-inner-banner jarallax"
        data-jarallax
        data-speed="0.2"
        data-imgPosition="50% 0%"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="banner-in-title">
                <h1 className="h1-title">Portafolio</h1>
              </div>
              <div className="banner-breadcum">
                <ul>
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <i className="fa fa-chevron-right"></i>
                  </li>
                  <li>
                    <a href="#">Portfolio</a>
                  </li>
                  <li>
                    <i className="fa fa-chevron-right"></i>
                  </li>
                  <li>
                    <a href="#">Portfolio Detail</a>
                  </li>
                </ul>
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
                <h2 className="h2-title">Couple Fitness Workout</h2>
                <p>
                  Vida sana y pasar más tiempo con la persona que queremos.Cuando realizamos ejercicio con nuestro ser amado, mejoramos
                  nuestra relación por el simple hecho de pasar un rato agradable junto al otro. Compartir momentos de ocio reduce las
                  peleas y mejora la comunicación, y con un objetivo deportivo se comparte la motivación de alcanzarlo. Practicar deportes
                  juntos une y recrea; tal vez por eso esta modalidad se convirtió en tendencia en Instagram, donde bajo el hashtag
                  #coupleworkout se pueden ver infinidad de parejas que entrenan juntas.
                </p>
                <p>
                  Presentamos planes para pareja con entrenador personal, entre los dias y horas que usted desee, bajo la supervición de un nutricionista.
                </p>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="portfolio-detail-info-box">
                <div className="portfolio-detail-info-content">
                  <div className="portfolio-detail-info-text">
                    <span>Client Name:</span>
                    <span>William Dixon</span>
                  </div>
                  <div className="portfolio-detail-info-text two">
                    <span>Trainer Name:</span>
                    <span>David Copper</span>
                  </div>
                </div>
                <div className="portfolio-detail-info-content two">
                  <div className="portfolio-detail-info-text">
                    <span>Date:</span>
                    <span>7, March, 2022</span>
                  </div>
                  <div className="portfolio-detail-info-text two">
                    <span>Tags:</span>
                    <span>Fitness, Gym</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div
                className="portfolio-detail-img-cfw one wow fadeInUp"
                data-wow-delay=".5s"
              >
                <img src="../src/assets/img/bbb-33.jpg" alt="portafolio" />
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                vitae commodo enim, eu aliquet nisi. Aenean lobortis volutpat
                magna in lobortis. Ut mauris nisi, pharetra vel vehicula eget,
                lobortis id purus. Donec malesuada interdum purus in tincidunt.
                Vestibulum sed laoreet arcu. Cras vel felis in est commodo
                mattis. Etiam venenatis consequat rutrum. Curabitur pulvinar
                lorem ornare, laoreet urna a, eleifend orci. Sed vitae finibus
                elit. Ut sed hendrerit enim. In eget nibh leo. Quisque arcu est,
                elementum rhoncus dignissim ac, eleifend eu quam. Curabitur
                faucibus lacus sem. Quisque convallis nisi massa, tristique
                posuere nunc viverra a.
              </p>
              <div className="portfolio-detail-points">
                <div className="row">
                  <div className="col-lg-6 col-md-6">
                    <div className="points">
                      <ul>
                        <li>
                          <div className="point-object"></div>
                          <p>
                            Morbi sed massa scelerisque, porta dui vel, finibus
                            nulla. Etiam accumsan, eros quis rhoncus interdum.
                          </p>
                        </li>
                        <li>
                          <div className="point-object"></div>
                          <p>
                            Sed posuere purus eget pharetra commodo.
                            Pellentesque consectetur quam in neque dignissim
                            tincidunt.
                          </p>
                        </li>
                        <li>
                          <div className="point-object"></div>
                          <p>
                            Nulla faucibus mi a lectus interdum tempor. Lorem
                            ipsum dolor sit amet, consectetur adipiscing elit.
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
                            Morbi sed massa scelerisque, porta dui vel, finibus
                            nulla. Etiam accumsan, eros quis rhoncus interdum.
                          </p>
                        </li>
                        <li>
                          <div className="point-object"></div>
                          <p>
                            Sed posuere purus eget pharetra commodo.
                            Pellentesque consectetur quam in neque dignissim
                            tincidunt.
                          </p>
                        </li>
                        <li>
                          <div className="point-object"></div>
                          <p>
                            Nulla faucibus mi a lectus interdum tempor. Lorem
                            ipsum dolor sit amet, consectetur adipiscing elit.
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
                      <img src="../src/assets/img/bbb-33.jpg" alt="Portfolio" />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div
                      className="portfolio-detail-img-cfw three wow fadeInDown"
                      data-wow-delay=".5s"
                    >
                      <img src="../src/assets/img/bbb-33.jpg" alt="Portfolio" />
                    </div>
                  </div>
                </div>
              </div>
              <h3 className="h3-title">
                Incredible Result With Our Fitness Goal
              </h3>
              <p>
                Donec vehicula laoreet finibus. Integer gravida ornare lectus
                aliquam aliquam. Sed lobortis erat ut metus gravida placerat sed
                eget augue. Quisque ultricies interdum justo, in imperdiet
                sapien cursus eget. Morbi rutrum odio quis fermentum malesuada.
                Nunc consequat nibh non turpis tristique, pharetra laoreet
                tellus tempor. Nulla facilisi. In eu sapien placerat, pretium ex
                at, accumsan diam. Suspendisse ante orci, auctor vel
                pellentesque eu, lobortis aliquet sapien.
              </p>
              <div className="portfolio-detail-arrow-box">
                <div className="portfolio-detail-arrow left">
                  <a href="#">
                    <i className="fa fa-arrow-left" aria-hidden="true"></i>
                    <span>Previous</span>
                  </a>
                </div>
                <div className="portfolio-detail-arrow right">
                  <a href="#">
                    <span>Next</span>
                    <i className="fa fa-arrow-right" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Portofolio;
