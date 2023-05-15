import React from "react";
import { useAuth } from "../Contexts/AuthContext";
import { Link } from "react-router-dom";
import { useState } from "react";
import Navbar from "../Componentes/navbarHomeRegister";

export function HomeUserRegister() {
   // immportando el user y el logout del contexto
   const { user, logout, loading } = useAuth();

   const [image, setImage] = useState(null);

   const handleImageChange = (event) => {
      setImage(event.target.photoUrl);
   };

   const handleSubmit = (event) => {
      event.preventDefault();
      // send form data, including image, to server
   };

   console.log(user);
   if (!user || !user.email) {
      return <div>No user found</div>;
   }
   // conbirtiendo en handleLogout en una funcion asyncrona por que el logout es una promesa
   const handleLogout = async () => {
      await logout();
   };
   if (loading) {
      return <h1>loading...</h1>;
   }

   return (
      <>
         <Navbar />
         <div className="container">
            <div className="card bg-white shadow-lg rounded-3 p-3 mx-auto mt-5">
               {/* <div className="card-body">
               <h1 className="card-title text-xl mb-4">
                  welcome {user.displayName || user.email}
               </h1>
               <button
                  className="btn btn-outline-secondary rounded-pill py-2 px-4 text-black"
                  onClick={handleLogout}
               >
                  logout
               </button>
            </div> */}
               <div className="container my-5">
                  <div className="row">
                     <div className="col-md-4 mb-4">
                        <div className="mb-3">
                           <img
                              src="https://d500.epimg.net/cincodias/imagenes/2016/07/04/lifestyle/1467646262_522853_1467646344_noticia_normal.jpg"
                              alt="Profile"
                              width="100%"
                           />
                        </div>
                        <div className="card">
                           <div className="card-body">
                              <h5 className="card-title">
                                 {user.displayName || user.email}
                              </h5>
                              <ul className="list-group">
                                 <li className="list-group-item">
                                    <a href="#">Dashboard</a>
                                 </li>
                                 <li className="list-group-item">
                                    <a href="#">Pedidos</a>
                                 </li>
                                 <li className="list-group-item">
                                    <a href="#">Direcciones</a>
                                 </li>
                                 <li className="list-group-item">
                                    <a href="#">Detalles de la cuenta</a>
                                 </li>
                                 <li className="list-group-item">
                                    <Link onClick={handleLogout}>
                                       Cerrar sesión
                                    </Link>
                                 </li>
                              </ul>
                           </div>
                        </div>
                     </div>
                     <div className="col-md-8">
                        <div className="card">
                           <div className="card-body">
                              <h5 className="card-title">Mis pedidos</h5>
                              <table className="table table-striped">
                                 <thead>
                                    <tr>
                                       <th scope="col">Pedido</th>
                                       <th scope="col">Fecha</th>
                                       <th scope="col">Total</th>
                                       <th scope="col">Estado</th>
                                    </tr>
                                 </thead>
                                 <tbody>
                                    <tr>
                                       <th scope="row">#1001</th>
                                       <td>2023-05-12</td>
                                       <td>$120.00</td>
                                       <td>
                                          <span className="badge badge-success">
                                             Completado
                                          </span>
                                       </td>
                                    </tr>
                                    <tr>
                                       <th scope="row">#1002</th>
                                       <td>2023-05-10</td>
                                       <td>$50.00</td>
                                       <td>
                                          <span className="badge badge-warning">
                                             Pendiente
                                          </span>
                                       </td>
                                    </tr>
                                 </tbody>
                              </table>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
}
