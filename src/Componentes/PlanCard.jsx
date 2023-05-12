import React from "react";
import { Row, Col, Card } from "react-bootstrap";

const PlanCard = ({ plan, price, isChecked, onChange }) => {
   return (
      <Card
         className={`plan-card ${isChecked ? "selected" : ""}`}
         onClick={() => onChange(!isChecked)}
      >
         <Card.Body>
            <Row>
               <Col md={1}>
                  <input
                     type="checkbox"
                     checked={isChecked}
                     onChange={(e) => onChange(e.target.checked)}
                  />
               </Col>
               <Col md={11}>
                  <div className="plan-details d-flex">
                     <img
                        width={20}
                        height={200}
                        src="https://via.placeholder.com/50x80.png?text=Placeholder"
                        alt="Product Image"
                     />
                     <h3>{plan}</h3>
                     <p>{price}</p>
                  </div>
               </Col>
            </Row>
         </Card.Body>
      </Card>
   );
};
export default PlanCard;
