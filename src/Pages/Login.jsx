import React from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { useState } from "react";
import { useAuth } from "../Contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import Alert from "../Componentes/Alert";
import Navbar from "../Componentes/navbarHomeRegister";

function Login() {
   const [user, setUser] = useState({
      email: "",
      password: "",
   });
   // agregango un estado para el error para setearlo para  que se muestre el cambio en pantall
   const [email, setEmail] = useState(null);
   const [password, setPassword] = useState(null);
   const [error, setError] = useState("");
   const [loading, setLoading] = useState(false);

   // extrayendo el objeto signup del hook context
   const { login, loginWithGoogle, resetPassword } = useAuth();

   // guardando el paquete usenavigate  en una variable
   const navigate = useNavigate();

   // leyendo los eventos de los imputs
   const handleInputChange = ({ target: { name, value } }) => {
      setUser({ ...user, [name]: value });
   };

   const validateData = (email, password) => {
      if (!email) return false;

      if (!password) return false;

      return true;
   };

   const closeAlert = () => {
      setError(null);
   };

   // para que no se refresqye la pagina
   // trasnformando a asyncrono
   const handleSubmit = async (event) => {
      event.preventDefault();
      console.log("probando login");

      if (validateData(email, password)) {
         login(email, password)
            .then((result) => {
               console.log(
                  "se ha autenticado el usaurio correctamente ",
                  result
               );
               router.push("/");
            })
            .catch((err) => {
               console.log(err);
               setError(err.message);
            });
      } else {
         setError("Datos de formulario incorrectos, pruebe otra vez");
      }
   };
   // para el login con google
   const handleGoogleSignIn = async () => {
      try {
         await loginWithGoogle();
         navigate("/Homeuser");
      } catch (error) {
         setError(error.message);
      }
   };
   // para el login con facebook

   // para recetear las contraseñas
   const handleResetPassword = async () => {
      if (!user.email) return setError("please enter your email");
      try {
         await resetPassword(user.email);
         setError("We sent you an email.");
      } catch (error) {
         setError(error.message);
      }
   };

   return (
      <>
         <Navbar />

         <div className="bg-gradient-primary">
            <Container>
               <Row className="justify-content-center">
                  <Col xl={10} lg={12} md={9}>
                     <Card border="0" className="shadow-lg my-5">
                        <Card.Body className="p-0 d-block">
                           <Row>
                              <Col
                                 lg={6}
                                 className="d-none d-lg-block bg-login-image"
                              ></Col>
                              <Col lg={6}>
                                 <div className="p-5">
                                    <div className="text-center">
                                       <h1 className="h4 text-gray-900 mb-4">
                                          Welcome Back!
                                       </h1>
                                    </div>
                                    <Form onSubmit={handleSubmit}>
                                       {error && (
                                          <Alert
                                             title={"Error"}
                                             message={error}
                                             closeError={closeAlert}
                                          />
                                       )}
                                       <Form.Group>
                                          <Form.Control
                                             type="email"
                                             autoComplete="email"
                                             className="form-control-user"
                                             aria-describedby="emailHelp"
                                             placeholder="Enter Email Address..."
                                             onChange={(event) =>
                                                setEmail(event.target.value)
                                             }
                                          />
                                       </Form.Group>
                                       <hr />
                                       <Form.Group>
                                          <Form.Control
                                             type="password"
                                             className="form-control-user"
                                             id="exampleInputPassword"
                                             placeholder="Password"
                                             onChange={(event) =>
                                                setPassword(event.target.value)
                                             }
                                          />
                                       </Form.Group>
                                       <hr />

                                       <Button
                                          className="btn btn-primary btn-user btn-block"
                                          type="submit"
                                          value="acceder"
                                          to="/Homeuser"
                                       >
                                          Login
                                       </Button>
                                       <hr />
                                       <Button
                                          className="btn btn-google btn-user btn-block"
                                          onClick={handleGoogleSignIn}
                                       >
                                          <i className="fab fa-google fa-fw"></i>{" "}
                                          Login with Google
                                       </Button>
                                       <Button className="btn btn-facebook btn-user btn-block">
                                          <i className="fab fa-facebook-f fa-fw"></i>{" "}
                                          Login with Facebook
                                       </Button>
                                    </Form>
                                    <hr />
                                    <div className="text-center">
                                       <Link
                                          className="small"
                                          onClick={handleResetPassword}
                                       >
                                          ¿Has olvidado tu contraseña?
                                       </Link>
                                    </div>
                                    <div className="text-center">
                                       <Link
                                          to="/register"
                                          className="text-blue-700 hover:text-blue-900"
                                       >
                                          Crear una cuenta
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

export default Login;
