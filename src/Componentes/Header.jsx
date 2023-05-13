import React from "react";
import "../Estilos/Juan.css";
import "bootstrap/dist/css/bootstrap.min.css";
import imgLogo from "../assets/logo.png";
import { Link } from "react-router-dom";

function Header() {
   return (
      <>
         <section className="top-nav section" id="home">
            <div className="container">
               <div className="row justify-content-between">
                  <div className="col-auto">
                     <p>
                        {" "}
                        <i className="bx bxs-location-plus"></i> Av. Marsano 587, Miraflores
                     </p>
                     <p>
                        {" "}
                        <i className="bx bxs-phone-call"></i> +51 998 685 222
                     </p>
                  </div>
                  <div className="col-auto social-icons">
                     <a href="#" className="a">
                        <i className="bx bxl-facebook"></i>
                     </a>
                     <a href="#" className="a">
                        <i className="bx bxl-twitter"></i>
                     </a>
                     <a href="#" className="a">
                        <i className="bx bxl-instagram"></i>
                     </a>
                  </div>
               </div>
            </div>
         </section>

         <nav className="navbar navbar-expand-lg navbar-light bg-white sticky-top">
            <div className="container">
               <a className="navbar-brand a" href="#">
                  <img src={imgLogo} alt="Logo" className="img-logo" />
               </a>
               <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNav"
                  aria-controls="navbarNav"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
               >
                  <span className="navbar-toggler-icon"></span>
               </button>
               <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav ms-auto">
                     <li className="nav-item">
                        <Link
                           className="nav-link active a"
                           // aria-current="page"
                           to="/"
                        >
                           Inicio
                        </Link>
                     </li>
                     <li className="nav-item">
                        <Link className="nav-link a" to="/About">
                           Acerca de
                        </Link>
                     </li>
                     <li className="nav-item">
                        <Link className="nav-link a" to="/CartContainer">
                           Servicios
                        </Link>
                     </li>
                     <li className="nav-item">
                        <a className="nav-link a" href="#portfolio">
                           Portafolio
                        </a>
                     </li>
                     <li className="nav-item">
                        <a className="nav-link a" href="#team">
                           Equipo
                        </a>
                     </li>
                     {/* <li className="nav-item">
                        <a className="nav-link" href="#reviews">
                           Reviews
                        </a>
                     </li> */}
                     <li className="nav-item">
                        <a className="nav-link a" href="#blog">
                           Blog
                        </a>
                     </li>
                  </ul>
                  {/* <a
                     href="#"
                     data-bs-toggle="modal"
                     data-bs-target="#exampleModal"
                     className="btn btn-brand ms-lg-3 a"
                  >
                     <i className="fa-solid fa-user"></i>
                  </a> */}
               </div>
            </div>
         </nav>
      </>
   );
}

export default Header;
