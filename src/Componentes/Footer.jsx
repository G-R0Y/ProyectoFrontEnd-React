import React from "react";
import "../Estilos/Rodrigo.css";
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn,
} from "mdb-react-ui-kit";

function Footer() {
  return (
    <MDBFooter className="footer_r" color="white">
      <MDBContainer className="p-4">
        <section className="text-white">
          <MDBRow>
            <MDBCol lg="3" md="6" className="mb-4 mb-md-0 ">
              <div className="logo-footer">
                <img src="../src/assets/logo.png" alt="Icon-Logo" />
              </div>
              <hr
                className="mb-4 mt-0 d-inline-block mx-auto "
                id="footer-space-line"
              />
              <p className="text-white">
                <i className="fas fa-home mr-3 text-white"></i> 27 Division St,
                New York, United State America
              </p>
              <p className="text-white">
                <i className="fas fa-phone mr-3 text-white"></i> (054) 983 456
                789
              </p>
              <p className="text-white">
                <i className="fas fa-envelope mr-3 text-white"></i>{" "}
                dailyfit@hotmail.com
              </p>
            </MDBCol>

            <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
              <h6 className="text-uppercase fw-bold">Material Informativo</h6>
              <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                id="footer-space-line"
              />

              <p>
                <a href="#!" className="text-white">
                  Nosotros
                </a>
              </p>

              <p>
                <a href="#!" className="text-white">
                  Mision
                </a>
              </p>

              <p>
                <a href="#!" className="text-white">
                  Vision
                </a>
              </p>

              <p>
                <a href="#!" className="text-white">
                  Blog
                </a>
              </p>

              <p>
                <a href="#!" className="text-white">
                  Tienda
                </a>
              </p>

              <p>
                <a href="#!" className="text-white">
                  Testimonios
                </a>
              </p>
            </MDBCol>

            <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
              <h6 className="text-uppercase fw-bold">Servicios</h6>
              <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                id="footer-space-line"
              />
              <p>
                <a href="#!" className="text-white">
                  Rutinas
                </a>
              </p>
              <p>
                <a href="#!" className="text-white">
                  Entrenamiento
                </a>
              </p>
              <p>
                <a href="#!" className="text-white">
                  Nutricion
                </a>
              </p>
              <p>
                <a href="#!" className="text-white">
                  Planes
                </a>
              </p>
              <p>
                <a href="#!" className="text-white">
                  Productos
                </a>
              </p>
            </MDBCol>

            <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
              <h6 className="text-uppercase fw-bold">Acerca de DailyFit</h6>
              <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                id="footer-space-line"
              />
              <p className="text-white">
                Somos un Gimansio que prioriza los buenos resultados y la mejor
                calidad en productos para nuestros miembros activos, visitanos en nuestras
                redes sociales para que puedas
                comunicarnos con nosotros.
              </p>
              <div className="cel text-center">
                <MDBIcon fas icon="phone-alt" className="phone ms-3" />
                <span className="numero">+51 999 999 999</span>
              </div>

              <section className="mb-4">
                <MDBBtn
                  outline
                  color="light"
                  floating
                  className="m-1"
                  href="#!"
                  role="button"
                >
                  <MDBIcon fab icon="facebook-f" />
                </MDBBtn>

                <MDBBtn
                  outline
                  color="light"
                  floating
                  className="m-1"
                  href="#!"
                  role="button"
                >
                  <MDBIcon fab icon="twitter" />
                </MDBBtn>

                <MDBBtn
                  outline
                  color="light"
                  floating
                  className="m-1"
                  href="#!"
                  role="button"
                >
                  <MDBIcon fab icon="instagram" />
                </MDBBtn>

                <MDBBtn
                  outline
                  color="light"
                  floating
                  className="m-1"
                  href="#!"
                  role="button"
                >
                  <MDBIcon fab icon="linkedin-in" />
                </MDBBtn>
              </section>
            </MDBCol>
          </MDBRow>
        </section>
      </MDBContainer>

      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © 2023 Copyright:
      </div>
    </MDBFooter>
  );
}
export default Footer;
