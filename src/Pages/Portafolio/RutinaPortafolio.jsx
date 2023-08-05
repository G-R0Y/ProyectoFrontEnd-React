import React from "react";
import { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../Estilos/Rodrigo.css";
import Axios from "axios";

const RutinaPortafolio = () => {
  /* const portafolio_items = [
    {
    "id": 1,
    "nombre": "Entrenamiento personalizado",
    "descripcion": "Nuestros entrenadores altamente calificados trabajarán contigo para desarrollar un programa de ejercicios personalizado basado en tus objetivos específicos, nivel de condición física y preferencias.",
    "imagen": "https://res.cloudinary.com/dbbe8abtz/image/upload/v1689559846/portafolio/portfolio-img1_jbw3z2.jpg"
  },
  {
    "id": 2,
    "nombre": "Clases grupales de fitness",
    "descripcion": "Ofrecemos una variedad de clases grupales emocionantes y motivadoras, desde aeróbicos de alto impacto y spinning hasta yoga relajante y pilates.",
    "imagen": "https://res.cloudinary.com/dbbe8abtz/image/upload/v1689559847/portafolio/portfolio-img2_ia7cdb.jpg"
  },
  {
    "id": 3,
    "nombre": "Máquinas de entrenamiento y pesas",
    "descripcion": "Contamos con una completa sala de pesas y equipos de entrenamiento de última generación. Aquí podrás trabajar diferentes grupos musculares, mejorar tu fuerza y tonificación muscular.",
    "imagen": "https://res.cloudinary.com/dbbe8abtz/image/upload/v1689559848/portafolio/portfolio-img3_xtrcmv.jpg"
  },
  {
    "id": 4,
    "nombre": "Entrenamiento funcional",
    "descripcion": "El entrenamiento funcional se centra en mejorar la fuerza y la estabilidad para actividades diarias y deportes. Mediante ejercicios que imitan movimientos naturales, mejorarás la coordinación, el equilibrio y la resistencia, lo que te permitirá disfrutar de una vida más activa y con menos riesgo de lesiones.",
    "imagen": "https://res.cloudinary.com/dbbe8abtz/image/upload/v1689559847/portafolio/portfolio-img5_xu1onm.jpg"
  },
  {
    "id": 5,
    "nombre": "Circuito de entrenamiento",
    "descripcion": "Nuestro circuito de entrenamiento ofrece una rutina completa y variada en la que te mueves de una estación a otra realizando ejercicios diferentes. Es una forma eficiente de quemar calorías, mejorar la resistencia cardiovascular y fortalecer diferentes grupos musculares en una sola sesión.",
    "imagen": "https://res.cloudinary.com/dbbe8abtz/image/upload/v1689559848/portafolio/portfolio-img3_xtrcmv.jpg"
  },
  {
    "id": 6,
    "nombre": "Programa de Levantamiento de Pesas Avanzado",
    "descripcion": "Nuestro programa de levantamiento de pesas avanzado está diseñado para aquellos que desean llevar su entrenamiento de fuerza al siguiente nivel. Este programa se enfoca en técnicas de levantamiento más complejas, como levantamientos olímpicos y levantamientos compuestos, para aumentar la fuerza y el tamaño muscular de manera efectiva.",
    "imagen": "https://res.cloudinary.com/dbbe8abtz/image/upload/v1689559850/portafolio/portfolio-img6_fqlwhu.jpg"
  }
  ]; */
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [data, setDate] = useState([]);

  useEffect(() => {
    const data = Axios.get(
      "http://159.223.125.50/api/portafolios"
    ) /* URL DEL BACKEND EN JSON ------------> https://jsonplaceholder.typicode.com/users */
      .then((res) => {
        setDate(res.data);
      })
      .catch((err) => console.log(err));
  });
  const arr = data.map((item) => {
    return (
      <div className="col-lg-4 mb-2">
        <div className="card text-bg-dark">
          <div
            className="portfolio-detail-img-cfw three wow fadeInDown"
            data-wow-delay=".5s"
          >
            <img src={item.imagen} alt="Portafolio" />

            <div className="card-img-overlay d-flex align-items-end">
              <div className="card-body">
                <button className="btn btn-outline-danger">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    className="bi bi-activity"
                    viewBox="0 0 16 16"
                    onClick={handleShow}
                  >
                    <path d="M6 2a.5.5 0 0 1 .47.33L10 12.036l1.53-4.208A.5.5 0 0 1 12 7.5h3.5a.5.5 0 0 1 0 1h-3.15l-1.88 5.17a.5.5 0 0 1-.94 0L6 3.964 4.47 8.171A.5.5 0 0 1 4 8.5H.5a.5.5 0 0 1 0-1h3.15l1.88-5.17A.5.5 0 0 1 6 2Z" />
                  </svg>
                </button>
                <Modal
                  id="modalpadre"
                  show={show}
                  onHide={handleClose}
                  style={{
                    fontSize: "30px",
                    backgroundImage: `url(${item.imagen})`,
                    opacity: 0.9,
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                  }}
                >
                  <Modal.Header closeButton id="modalheader">
                    <Modal.Title >{item.nombre}</Modal.Title>
                  </Modal.Header>
                  <Modal.Body id="modalbody">
                    <h5>{item.nombre}</h5>

                    <h5>Descripción: {item.descripcion}</h5>
                  </Modal.Body>
                  <Modal.Footer
                    id="modalfooter"
                    style={{ justifyContent: "center" }}
                  >
                    <Button variant="danger" onClick={handleClose}>
                      Cerrar
                    </Button>
                  </Modal.Footer>
                </Modal>
                <h2 className="card-text" id="card-rutinas">
                  {item.nombre}
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });
  return (
    <div className="container-sm" id="portafolio-cards">
      <div className="row justify-content-around mx-4 my-2">{arr}</div>
    </div>
  );
};

export default RutinaPortafolio;
