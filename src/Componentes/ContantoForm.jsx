import React from "react";
import { useState } from "react";

const ContantoForm = () => {
   const [message, setMessage] = useState("");

   const handleInputChange = (event) => {
      setMessage(event.target.value);
   };
   return (
      <>
         <div className="col-md-5 col-sm-8 col-11 mb-3 formulario">
            <form>
               <div className="form">
                  <div className="form-group mb-2">
                     <label htmlFor="inputName">Nombre</label>
                     <input
                        type="text"
                        className="form-control"
                        id="inputName"
                        placeholder="Nombre"
                     />
                  </div>
                  <div className="form-group mb-2">
                     <label htmlFor="inputEmail">Email</label>
                     <input
                        type="email"
                        className="form-control"
                        id="inputEmail"
                        placeholder="Email"
                     />
                  </div>

                  <div className="form-group mb-2">
                     <label htmlFor="text-subject">Celular</label>
                     <input
                        type="number"
                        className="form-control"
                        id="text-subject"
                        placeholder="Celular"
                     />
                  </div>

                  <div className="form-group mb-3">
                     <label htmlFor="text-message-write">
                        Escribe tu mensaje aqui
                     </label>
                     <textarea
                        className="form-control"
                        id="message"
                        rows="4"
                        value={message}
                        onChange={handleInputChange}
                     ></textarea>{" "}
                  </div>
                  <div className="text-center">
                     <button
                        type="submit"
                        className="btn btn-danger"
                        id="btn-send-message"
                     >
                        ENVIAR
                     </button>
                  </div>
               </div>
            </form>
         </div>
      </>
   );
};

export default ContantoForm;
