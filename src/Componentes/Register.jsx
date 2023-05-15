import React from "react";
import "../Estilos/User.css";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { useState } from "react";
import { useAuth } from "../Contexts/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import Alert from "./Alert";
import Navbar from "./navbarHomeRegister";

function Register() {
   const [user, setUser] = useState({
      email: "",
      password: "",
   });
   // agregango un estado para el error para setearlo para  que se muestre el cambio en pantall
   const [error, setError] = useState("");

   // extrayendo el objeto signup del hook context
   const { signup, loginWithGoogle, resetPassword } = useAuth();

   // guardando el paquete usenavigate  en una variable
   const navigate = useNavigate();

   // leyendo los eventos de los imputs
   // const handleInputChange = ({ target: { name, value } }) => {
   //    setUser({ ...user, [name]: value });
   //}

   const closeAlert = () => {
      setError(null);
   };

   // para que no se refresqye la pagina
   // trasnformando a asyncrono

   const handleSubmit = async (e) => {
      e.preventDefault();

      // para que actualice el estado del error
      setError("");

      try {
         await signup(user.email, user.password);
         // para hacer la redireccion de a la pagina que queremos
         navigate("/login");
      } catch (error) {
         // para actualizar el estado del error
         console.log(error.message);
         // pendiente hacer el mensaje de error que es error.message
         setError(error.message);
      }
   };
   // para el login con facebook

   // para el login con google
   const handleGoogleSignIn = async () => {
      try {
         await loginWithGoogle();
         navigate("/Homeuser");
      } catch (error) {
         setError(error.message);
      }
   };
   // para recetear las contraseñas
   const handleResetPassword = async (e) => {
      e.preventDefault();
      if (!user.email) return setError("Write an email to reset password");
      try {
         await resetPassword(user.email);
         setError("We sent you an email. Check your inbox");
      } catch (error) {
         setError(error.message);
      }
   };

   return (
      <>
         <Navbar />
         {error && (
            <Alert title={"Error"} message={error} closeError={closeAlert} />
         )}
         <div className="bg-gradient-primary">
            <Container>
               <Row className="justify-content-center">
                  <Col xl={10} lg={12} md={9}>
                     <Card border="0" className="shadow-lg my-5">
                        <Card.Body className="p-0">
                           <Row>
                              <Col
                                 lg={6}
                                 className="d-none d-lg-block bg-register-image"
                              ></Col>
                              <Col lg={6}>
                                 <div className="p-5">
                                    <div className="text-center">
                                       <h1 className="h4 text-gray-900 mb-4">
                                          Create an Account!
                                       </h1>
                                    </div>
                                    <Form>
                                       <Row>
                                          <Col sm={6}>
                                             <Form.Group>
                                                <Form.Control
                                                   type="text"
                                                   placeholder="First Name"
                                                   name="firstName"
                                                />
                                             </Form.Group>
                                          </Col>
                                          <Col sm={6}>
                                             <Form.Group>
                                                <Form.Control
                                                   type="text"
                                                   placeholder="Last Name"
                                                   name="lastName"
                                                />
                                             </Form.Group>
                                          </Col>
                                       </Row>
                                       <Form.Group>
                                          <Form.Control
                                             type="email"
                                             placeholder="Email Address"
                                             name="email"
                                             onChange={(e) =>
                                                setUser({
                                                   ...user,
                                                   email: e.target.value,
                                                })
                                             }
                                          />
                                       </Form.Group>
                                       <Row>
                                          <Col sm={6}>
                                             <Form.Group>
                                                <Form.Control
                                                   type="password"
                                                   placeholder="Password"
                                                   name="password"
                                                   onChange={(e) =>
                                                      setUser({
                                                         ...user,
                                                         password:
                                                            e.target.value,
                                                      })
                                                   }
                                                />
                                             </Form.Group>
                                          </Col>
                                          <Col sm={6}>
                                             <Form.Group>
                                                <Form.Control
                                                   type="password"
                                                   placeholder="Repeat Password"
                                                />
                                             </Form.Group>
                                          </Col>
                                       </Row>
                                       <Button
                                          className="btn-primary btn-user btn-block"
                                          onClick={handleSubmit}
                                       >
                                          Register Account
                                       </Button>

                                       <Button
                                          className="btn-google btn-user btn-block"
                                          onClick={handleGoogleSignIn}
                                       >
                                          <i className="fab fa-google fa-fw"></i>{" "}
                                          Register with Google
                                       </Button>
                                       <Button className="btn-facebook btn-user btn-block">
                                          <i className="fab fa-facebook-f fa-fw"></i>{" "}
                                          Register with Facebook
                                       </Button>
                                    </Form>

                                    <div className="text-center">
                                       <Link
                                          className="small"
                                          onClick={handleResetPassword}
                                       >
                                          ¿Has olvidado tu contraseña?
                                       </Link>
                                    </div>
                                    <div className="text-center">
                                       <Link className="small" to="/login.html">
                                          Already have an account? Login!
                                       </Link>
                                    </div>
                                 </div>
                              </Col>
                           </Row>
                        </Card.Body>
                     </Card>
                  </Col>
               </Row>
            </Container>
         </div>
      </>
   );
}

export default Register;
