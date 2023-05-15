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
                        <i className="bx bxs-phone-call"></i> +51 999 999 999
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
               <Link className="navbar-brand" to="/">
                  <img src={imgLogo} alt="Logo" className="img-logo" />
               </Link>
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
                        <Link className="nav-link active a" to="/">
                           Inicio
                        </Link>
                     </li>
                     <li className="nav-item">
                        <Link className="nav-link a" to="/Nosotros">
                        Nosotros
                        </Link>
                     </li>
                     <li className="nav-item">
                        <Link className="nav-link a" to="/Subscripcion">
                        Subscripcion
                        </Link>
                     </li>
                     <li className="nav-item">
                        <Link className="nav-link" to="/Portfalio">
                           Portfolio
                        </Link>
                     </li>
                     {/* <li className="nav-item">
                        <a className="nav-link" href="#team">
                           Team
                        </a>
                     </li> */}
                     {/* <li className="nav-item">
                        <a className="nav-link" href="#reviews">
                           Reviews
                        </a>
                     </li> */}
                     {/* <li className="nav-item">
                        <a className="nav-link" href="#blog">
                           Blog
                        </a>
                     </li> */}
                  </ul>
                  <Link className="btn btn-brand ms-lg-3" to="/login">
                     <i className="fa-solid fa-user"></i>
                  </Link>
               </div>
            </div>
         </nav>
      </>
   );
}

export default Header;
