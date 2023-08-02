import React from "react";
import ParteBeneficios from "./PagInicio/ParteBeneficios";
import ParteTeam from "./PagInicio/ParteTeam";
import ParteIMC from "./PagInicio/ParteIMC";
import PartePagos from "./PagInicio/PartePagos";
import ParteContacto from "./PagInicio/ParteContacto";

function PagInicio() {
   return (
      <>
         <ParteBeneficios />
         <ParteTeam />
         <PartePagos />
         <ParteIMC />
         <ParteContacto />
      </>
   );
}

export default PagInicio;
