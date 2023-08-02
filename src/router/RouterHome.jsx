import React from "react";
import Header from "../Componentes/Header.jsx";
import Hero from "../Componentes/Hero";
import Footer from "../Componentes/Footer";

import ParteBeneficios from "../Pages/PagInicio/ParteBeneficios";
import ParteTeam from "../Pages/PagInicio/ParteTeam";
import ParteIMC from "../Pages/PagInicio/ParteIMC";
import PartePagos from "../Pages/PagInicio/PartePagos";
import ParteContacto from "../Pages/PagInicio/ParteContacto";

const RouterHome = () => {
   return (
      <>
         <Hero />
         <ParteBeneficios />
         <ParteTeam />
         <ParteIMC />
         <ParteContacto />
      </>
   );
};

export default RouterHome;
