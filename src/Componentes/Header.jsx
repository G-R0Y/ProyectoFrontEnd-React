import React from "react";
import "../Estilos/Juan.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function Header() {
   return (
      <>
         <section className="top-nav" id="home">
            <div className="container">
               <div className="row justify-content-between">
                  <div className="col-auto">
                     <p>
                        {" "}
                        <i className="bx bxs-location-plus"></i> 27 Division St,
                        New York, USA
                     </p>
                     <p>
                        {" "}
                        <i className="bx bxs-phone-call"></i> +1 (044) 123 456
                        789
                     </p>
                  </div>
                  <div className="col-auto social-icons">
                     <a href="#">
                        <i className="bx bxl-facebook"></i>
                     </a>
                     <a href="#">
                        <i className="bx bxl-twitter"></i>
                     </a>
                     <a href="#">
                        <i className="bx bxl-instagram"></i>
                     </a>
                  </div>
               </div>
            </div>
         </section>

         <nav className="navbar navbar-expand-lg navbar-light bg-white sticky-top">
            <div className="container">
               <a className="navbar-brand" href="#">
                  Activa Gym<span className="dot">.</span>
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
                           className="nav-link active"
                           // aria-current="page"
                           to="/"
                        >
                           Home
                        </Link>
                     </li>
                     <li className="nav-item">
                        <Link className="nav-link" to="/About">
                           About
                        </Link>
                     </li>
                     <li className="nav-item">
                        <Link className="nav-link" to="/CartContainer">
                           Services
                        </Link>
                     </li>
                     <li className="nav-item">
                        <a className="nav-link" href="#portfolio">
                           Portfolio
                        </a>
                     </li>
                     <li className="nav-item">
                        <a className="nav-link" href="#team">
                           Team
                        </a>
                     </li>
                     {/* <li className="nav-item">
                        <a className="nav-link" href="#reviews">
                           Reviews
                        </a>
                     </li> */}
                     <li className="nav-item">
                        <a className="nav-link" href="#blog">
                           Blog
                        </a>
                     </li>
                  </ul>
                  <a
                     href="#"
                     data-bs-toggle="modal"
                     data-bs-target="#exampleModal"
                     className="btn btn-brand ms-lg-3"
                  >
                     <i className="fa-solid fa-user"></i>
                  </a>
               </div>
            </div>
         </nav>
      </>
   );
}

export default Header;
