import React from "react";
import {
   Container,
   Row,
   Col,
   Button,
   Card,
   Image,
   Figure,
} from "react-bootstrap";
import "../Estilos/CartContainer.css";

import Checkout from "../Componentes/checkout";

import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import RenderListado from "../Componentes/RenderListado";

const CartContainer = () => {
   const [selectedPlan, setSelectedPlan] = useState("");
   // only fetch data once on initial render

   const handlePlanSelect = (plan) => {
      setSelectedPlan(plan);
   };

   return (
      <>
         <Col md={8}>
            <h1>Selecciona tus membresías</h1>
            <div className="cart-items">
               <RenderListado />
            </div>
            <Checkout />
         </Col>
         <Col md={4}>
            <div className="cart-summary">
               <p>Resumen del carrito</p>
               <hr />
               <p>Plan Seleccionado: {selectedPlan || "Ninguno"}</p>
            </div>
         </Col>
      </>
   );
};

export default CartContainer;
