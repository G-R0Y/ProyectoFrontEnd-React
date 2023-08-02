import React from "react";
import Contacto from "../../Componentes/Contacto";
import ContantoForm from "../../Componentes/ContantoForm";
import "../../Estilos/ParteContacto.css";
import "bootstrap/dist/css/bootstrap.min.css";
const ParteContacto = () => {
   return (
      <>
         <div className="ParteContacto">
            <div className="container-ms">
               <div className="row justify-content-center gap-2">
                  <Contacto />
                  <ContantoForm />
               </div>
            </div>
         </div>
      </>
   );
};

export default ParteContacto;
