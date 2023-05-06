import React from 'react'
import '../Estilos/Juan.css'
import '../Script/Juan.js'

function Header() {

  return (
    <>
      <div className="top-nav" id="home">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-auto">
              <p> <i className='bx bxs-location-plus'></i> 27 Division St, New York, USA</p>
              <p> <i className='bx bxs-phone-call'></i> +1 (044) 123 456 789</p>
            </div>
            <div className="col-auto social-icons">
              <a href="#"><i className='bx bxl-facebook'></i></a>
              <a href="#"><i className='bx bxl-twitter'></i></a>
              <a href="#"><i className='bx bxl-instagram'></i></a>
            </div>
          </div>
        </div>
      </div>

      <nav className="navbar navbar-expand-lg navbar-light bg-white sticky-top">
        <div className="container">
          <a className="navbar-brand" href="#">Activa Gym<span className="dot">.</span></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#home">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#services">Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#portfolio">Portfolio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#team">Team</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#reviews">Reviews</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#blog">Blog</a>
              </li>
            </ul>
            <a href="#" data-bs-toggle="modal" data-bs-target="#exampleModal"
              className="btn btn-brand ms-lg-3"><i className="fa-solid fa-cart-shopping"></i></a>
          </div>
        </div>
      </nav>

      <div className="owl-carousel owl-theme hero-slider">
        <div className="slide slide1">
          <div className="container">
            <div className="row">
              <div className="col-12 text-center text-white">
                <h2 className="text-white text-uppercase">RUNNER'S LIFE</h2>
                <h1 className="display-3 my-4">THE BEST<br />FITNESS STUDIO<br />IN TOWN</h1>
                <a href="#" className="btn btn-brand">Get Started</a>
                <a href="#" className="btn btn-outline-light ms-3">Our work</a>
              </div>
            </div>
          </div>
        </div>
        <div className="slide slide2">
          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-10 offset-lg-1 text-white">
                <h2 className="text-white text-uppercase">RUNNER'S LIFE</h2>
                <h1 className="display-3 my-4">THE BEST<br />FITNESS STUDIO<br />IN TOWN</h1>
                <a href="#" className="btn btn-brand">Get Started</a>
                <a href="#" className="btn btn-outline-light ms-3">Our work</a>
              </div>
            </div>
          </div>
        </div>
        <div className="slide slide3">
          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-12 offset-lg-1 text-white">
                <h2 className="text-white text-uppercase">RUNNER'S LIFE</h2>
                <h1 className="display-3 my-4">THE BEST<br />FITNESS STUDIO<br />IN TOWN</h1>
                <a href="#" className="btn btn-brand">Get Started</a>
                <a href="#" className="btn btn-outline-light ms-3">Our work</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header