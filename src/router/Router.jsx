import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import About from "../Pages/About.jsx";
import Header from "../Componentes/Header.jsx";

import RouterHome from "./RouterHome";
import Footer from "../Componentes/Footer";
import Succes from "../Componentes/succes";
import Cancel from "../Componentes/cancel.jsx";
import CartContainer from "../pasarela/CartContainer.jsx";
// import Login from "../Login/index";

const Router = () => {
   return (
      <BrowserRouter>
         <Header />

         <Routes>
            {/* rtutas publicas */}
            {/* <Route path="/" element={<App />} /> */}
            <Route path="/" element={<RouterHome />} />
            <Route path="/About" element={<About />} />
            <Route path="/CartContainer" element={<CartContainer />} />
            <Route path="/Succes" element={<Succes />} />
            <Route path="/cancel" element={<Cancel />} />
            {/* rutas privadas */}

            {/* <Route element={<Private />}>
               <Route path="/checkout" element={<PagPago />} />
            </Route> */}
         </Routes>
      </BrowserRouter>
   );
};

export default Router;
