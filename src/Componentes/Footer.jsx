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
        <section className="">
          <MDBRow>
            <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
              <div className="logo-footer">
                <img src="../src/assets/logo.png" alt="Icon-Logo" />
              </div>
              <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                id="footer-space-line"
              />
              <p>
                <i className="fas fa-home mr-3"></i> 27 Division St, New York,
                United State America
              </p>
              <p>
                <i className="fas fa-phone mr-3"></i> +1 (044) 123 456 789
              </p>
              <p>
                <i className="fas fa-envelope mr-3"></i> info@example.com
              </p>
            </MDBCol>

            <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
              <h6 className="text-uppercase fw-bold">Useful links</h6>
              <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                id="footer-space-line"
              />

              <p>
                <a href="#!" className="text-white">
                  About us
                </a>
              </p>

              <p>
                <a href="#!" className="text-white">
                  About Us V2
                </a>
              </p>

              <p>
                <a href="#!" className="text-white">
                  Contact Us
                </a>
              </p>

              <p>
                <a href="#!" className="text-white">
                  Our Blog
                </a>
              </p>

              <p>
                <a href="#!" className="text-white">
                  Shop
                </a>
              </p>

              <p>
                <a href="#!" className="text-white">
                  Testimonial
                </a>
              </p>
            </MDBCol>

            <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
              <h6 className="text-uppercase fw-bold">Our Service</h6>
              <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                id="footer-space-line"
              />
              <p>
                <a href="#!" className="text-white">
                  Workout
                </a>
              </p>
              <p>
                <a href="#!" className="text-white">
                  Progression
                </a>
              </p>
              <p>
                <a href="#!" className="text-white">
                  Nutrition
                </a>
              </p>
              <p>
                <a href="#!" className="text-white">
                  Workout
                </a>
              </p>
              <p>
                <a href="#!" className="text-white">
                  Progression
                </a>
              </p>
            </MDBCol>

            <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
              <h6 className="text-uppercase fw-bold">Free Consultation</h6>
              <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                id="footer-space-line"
              />
              <p className="">
                Power GYM Lift is champ in providing its users with absolutely
                everything a fitness or gym site needs
              </p>
              <div className="cel">
                <MDBIcon fas icon="phone-alt" className="phone" />
                <h4 className="numero">1-800-643-430</h4>
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








