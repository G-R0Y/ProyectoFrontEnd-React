import React, { useEffect, useState } from "react";
import { Button, Modal } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import "../Estilos/Rodrigo.css";

import Axios from "axios";

function Productos() {
  /* const producto_items = [
    {
      nombre_articulo: "Producto 1",
      descripcion_articulo: "descripcion 1",
      talla_articulo: "Talla 1",
      color_articulo: "Color 1",
      precio_articulo: "Precio 1",
      marca_articulo: "Marca 1",
      imagen_Articulo: "../src/assets/img/1-1-370x370.jpg",
    },
    {
      nombre_articulo: "Producto 2",
      descripcion_articulo: "descripcion 2",
      talla_articulo: "Talla 2",
      color_articulo: "Color 2",
      precio_articulo: "Precio 2",
      marca_articulo: "Marca 2",
      imagen_Articulo: "../src/assets/img/1-1-370x370.jpg",
    },
    {
      nombre_articulo: "Producto 3",
      descripcion_articulo: "descripcion 3",
      talla_articulo: "Talla 3",
      color_articulo: "Color 3",
      precio_articulo: "Precio 3",
      marca_articulo: "Marca 3",
      imagen_Articulo: "../src/assets/img/1-1-370x370.jpg",
    },
    {
      nombre_articulo: "Producto 4",
      descripcion_articulo: "descripcion 4",
      talla_articulo: "Talla 4",
      color_articulo: "Color 4",
      precio_articulo: "Precio 4",
      marca_articulo: "Marca 4",
      imagen_Articulo: "../src/assets/img/1-1-370x370.jpg",
    },
    {
      nombre_articulo: "Producto 5",
      descripcion_articulo: "descripcion 5",
      talla_articulo: "Talla 5",
      color_articulo: "Color 5",
      precio_articulo: "Precio 5",
      marca_articulo: "Marca 5",
      imagen_Articulo: "../src/assets/img/1-1-370x370.jpg",
    },
    {
      nombre_articulo: "Producto 6",
      descripcion_articulo: "descripcion 6",
      talla_articulo: "Talla 6",
      color_articulo: "Color 6",
      precio_articulo: "Precio 6",
      marca_articulo: "Marca 6",
      imagen_Articulo: "../src/assets/img/1-1-370x370.jpg",
    },
    {
      nombre_articulo: "Producto 7",
      descripcion_articulo: "descripcion 7",
      talla_articulo: "Talla 7",
      color_articulo: "Color 7",
      precio_articulo: "Precio 7",
      marca_articulo: "Marca 7",
      imagen_Articulo: "../src/assets/img/1-1-370x370.jpg",
    },
    {
      nombre_articulo: "Producto 8",
      descripcion_articulo: "descripcion 8",
      talla_articulo: "Talla 8",
      color_articulo: "Color 8",
      precio_articulo: "Precio 8",
      marca_articulo: "Marca 8",
      imagen_Articulo: "../src/assets/img/1-1-370x370.jpg",
    },
  ]; */
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [data, SetDate] = useState([]);
  useEffect(() => {
    const data= Axios.get("http://159.223.125.50/api/productos") ///URL DEL BACKEND
      .then((res) => {
        SetDate(res.data);
      })
      .catch((err) => console.log(err));
  });
  /* const arr = producto_items.map((item) */ 
  const arr = data.map((item) => {
    return (
      <div className="col-lg-3 mb-2">
        <div className="card">
          <img src={item.imagen_Articulo} className="card-img-top" alt="..." />

          <div className="card align-items-center">
            <h5 className="card-title">{item.nombre_articulo}</h5>
            <p className="card-text">{item.precio_articulo}</p>
            <p className="card-text">{item.marca_articulo}</p>
            <div className="botonesarticulo">
              <div>
                <Button id="modalbutton" variant="primary" onClick={handleShow}>
                  Detalles
                </Button>

                <Modal id="modalpadre" show={show} onHide={handleClose} style={{ fontSize: "30px"}}>
                  <Modal.Header closeButton id="modalheader">
                    <Modal.Title style={{}}>
                      
                      Detalles de {item.nombre_articulo}
                      </Modal.Title>
                  </Modal.Header>
                  <Modal.Body id="modalbody" style={{ backgroundImage: `url(${item.imagen_Articulo})` , opacity: 0.9}}>
                    <h5>{item.nombre_articulo}</h5>
                    <h5>Talla: {item.talla_articulo}</h5>
                    <h5>Color: {item.color_articulo}</h5>
                    <h5>Precio: {item.precio_articulo}</h5>
                    <h5>Marca: {item.marca_articulo}</h5>
                    <h5>Descripción: {item.descripcion_articulo}</h5>
                    </Modal.Body>
                  <Modal.Footer id="modalfooter" style={{justifyContent:"center"}}>
                    <Button variant="danger" onClick={handleClose}>
                      Cerrar
                    </Button>
                    
                  </Modal.Footer>
                </Modal>
              </div>
              {/* <button to="#" className="btn btn-info">
                Detalles
              </button> */}
              <button to="#" className="btn btn-success">
                Comprar
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="container-ms" id="portafolio-cards">
      <div className="row justify-content-around mx-4 my-2">{arr}</div>
    </div>
  );
}

export default Productos;
