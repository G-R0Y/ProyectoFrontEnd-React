import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import "../Estilos/colorpago.css";
import { Container, Row, Col } from "react-bootstrap";
import Checkout from "./checkout";

const CartillaPago = (data) => {
   const valor = { ...data.data };

   return (
      <Container>
         <Row>
            <div className="pricing-box wow fadeInUp" data-wow-delay=".5s">
               <div className="pricing-title-box pricing-one">
                  <h3 className="h3--title">{valor.tipo}</h3>
                  <h2 className="h2--title">
                     S/. {valor.precio}
                     <span> por Mes</span>
                  </h2>
               </div>
               <div className="pricing-content-box">
                  <div className="pricing-content">
                     <div className="pricing-point">
                        <ul>
                           {valor.icon.map((items, i) => {
                              return (
                                 <li key={i}>
                                    <FontAwesomeIcon
                                       icon={valor.icon[i]}
                                       color={valor.color[i]}
                                       className="FontAwesomeIcon"
                                    />
                                    {valor.desc[i]}
                                 </li>
                              );
                           })}
                        </ul>
                     </div>
                  </div>
                  {/* <Link> */}

                     {/* <button
                        className="sec-btn  "
                        onClick={() => handleClick(`Premium${valor.tipo}`)}
                     >
                        {valor.tipo}
                     </button> */}

                     <Checkout valorTipo={valor.tipo}/>

                  {/* </Link> */}
               </div>
            </div>
         </Row>
      </Container>
   );
};

export default CartillaPago;
