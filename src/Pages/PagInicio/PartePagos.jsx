import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import "../../Estilos/Gianroy.css";
import CartillaPago from "../../Componentes/CartillaPago";

const precios = [
   {
      tipo: "Básico",
      precio: 49.9,
      cartel: ["#fd3d0c;"],
      icon: [faCheck, faXmark, faXmark, faXmark, faXmark],
      color: ["#26d723", "#d72323", "#d72323", "#d72323", "#d72323"],
      desc: [
         "Accede a todas las areas del gimnasio",
         "Acceso a sillones de masajes",
         "Acceso a cualquier horario sin reserva",
         "Acceso a todas las sedes",
         "Tutor personalizado",
      ],
   },
   {
      tipo: "Estandar",
      precio: 79.9,
      icon: [faCheck, faCheck, faCheck, faXmark, faXmark],
      color: ["#26d723", "#26d723", "#26d723", "#d72323", "#d72323"],
      desc: [
         "Accede a todas las areas del gimnasio",
         "Acceso a sillones de masajes",
         "Acceso a cualquier horario sin reserva",
         "Acceso a todas las sedes",
         "Tutor personalizado",
      ],
   },
   {
      tipo: "Premium",
      precio: 99.9,
      icon: [faCheck, faCheck, faCheck, faCheck, faCheck],
      color: ["#26d723", "#26d723", "#26d723", "#26d723", "#26d723"],
      desc: [
         "Accede a todas las areas del gimnasio",
         "Acceso a sillones de masajes",
         "Acceso a cualquier horario sin reserva",
         "Acceso a todas las sedes",
         "Tutor personalizado",
      ],
   },
];

function PartePagos() {
   return (
      <div className="container-fluid PartePagos">
         <div className="title">
            <h2>ELIGE TU PLAN DE PREFERENCIA</h2>
         </div>
         <div className="row justify-content-evenly mb-5">
            {precios.map((valor, i) => {
               return (
                  <div
                     className="col-lg-3 col-sm-5 col-10 m-3 cartilla-pago"
                     key={i}
                  >
                     <CartillaPago data={valor} />
                  </div>
               );
            })}
         </div>
      </div>
   );
}

export default PartePagos;
