import React from "react";

const cancel = () => {
   return (
      <>
         <div className="d-flex justify-content-center align-items-center flex-column" style={{ marginTop: 50, marginBottom: 200 }}>
            <i className="fa fa fa-times-circle fa-5x text-fail mb-3" ></i>
            <p className="h3 text-center mb-3" >No se pudo procesar tu pago</p>
         </div>
         {/* <a href="/" className="btn btn-primary mt-3">
            Ir al inicio
         </a> */}
      </>
   );
};
export default cancel;
