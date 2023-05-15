import React from "react";

const cancel = () => {
   return (
      <>
         <div className="d-flex align-items-center" style={{marginTop:50, marginBottom:200}}>
            <span className="text-danger me-2">
               <i className="fas fa-times-circle"></i>
            </span>
            <p className="mb-0" >No se pudo procesar tu pago</p>
         </div>
         {/* <a href="/" className="btn btn-primary mt-3">
            Ir al inicio
         </a> */}
      </>
   );
};
export default cancel;
