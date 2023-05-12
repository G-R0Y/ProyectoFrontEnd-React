import React, { useState, useEffect } from "react";
import { Row, Col, Card } from "react-bootstrap";
import "../Estilos/CartContainer.css";

import axios from "axios";
import Stripe from "stripe";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { render } from "react-dom";

import KEYS from "./Keys";

const options = {
   headers: {
      Authorization: `Bearer ${KEYS.secret}`,
   },
};
const FormatoDeMoneda = (num) => `$${num.slice(0, -2)}.${num.slice(-2)}`;
const RenderListado = () => {
   const [products, setProducts] = useState([]);
   const [prices, setPrices] = useState([]);

   const [loading, setLoading] = useState(true);
   const [error, setError] = useState("");

   useEffect(() => {
      // fetch products and prices here

      const fetchProductsAndPrices = async () => {
         try {
            const [productsResponse, pricesResponse] = await Promise.all([
               axios.get("https://api.stripe.com/v1/products", options),
               axios.get("https://api.stripe.com/v1/prices", options),
            ]);
            setProducts(productsResponse.data.data);
            setPrices(pricesResponse.data.data);
            setLoading(false);
            console.log(productsResponse.data.data);
            console.log(pricesResponse.data.data);
         } catch (error) {
            setLoading(false);
            setError(
               error.response?.data?.error?.message ||
                  error.message ||
                  "Ocurrió un error en la petición"
            );
         }
      };
      fetchProductsAndPrices();
   }, []);

   return (
      <Card>
         {prices.map((value) => {
            const productData = products.find(
               (product) => product.id === value.product
            );

            return (
               <Card.Body>
                  <Row>
                     <Col md={1}>
                        <input type="checkbox" />
                     </Col>
                     <Col md={11}>
                        <div
                           className="plan-details d-flex"
                           key={value.id}
                           data-value={value.id}
                           // onClick={() => handleClic(index)}
                        >
                           <img
                              src={productData.images[0]}
                              alt={productData.name}
                              className="img-thumbnail mr-3 product-imgt"
                           />

                           <h5>{productData.name}</h5>
                           <p>{productData.description}</p>
                           <p>
                              {FormatoDeMoneda(value.unit_amount_decimal)}
                              {value.currency.toUpperCase()}
                           </p>
                        </div>
                     </Col>
                  </Row>
               </Card.Body>
            );
         })}
      </Card>
   );
};

export default RenderListado;
