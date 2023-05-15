import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import About from "../Pages/About.jsx";
import Header from "../Componentes/Header.jsx";

import RouterHome from "./RouterHome";
import Footer from "../Componentes/Footer";
import Succes from "../Componentes/succes";
import Cancel from "../Componentes/cancel.jsx";
import CartContainer from "../pasarela/CartContainer.jsx";
import { AuthProvider } from "../Contexts/AuthContext.jsx";
import Login from "../Pages/Login.jsx";
import Register from "../Componentes/Register.jsx";
import { HomeUserRegister } from "../Pages/HomeUserRegister.jsx";
import { ProtectedRouter } from "../Componentes/protectedRouter.jsx";
import Navbar from "../Componentes/navbarHomeRegister.jsx";
import Portofolio from "../Pages/Portofolio.jsx";
import Details from "../Componentes/details.jsx";
// import Login from "../Login/index";

const Router = () => {
   return (
      <BrowserRouter>
         <Header />
         <AuthProvider>
            <Routes>
               <Route path="/login" element={<Login />} />
               <Route path="/register" element={<Register />} />
               <Route path="/navbar" element={<Navbar />} />
               <Route
                  path="/Homeuser"
                  element={
                     <ProtectedRouter>
                        <HomeUserRegister />
                     </ProtectedRouter>
                  }
               />
            </Routes>
         </AuthProvider>
         <Routes>
            {/* rtutas publicas */}
            {/* <Route path="/" element={<App />} /> */}
            <Route path="/" element={<RouterHome />} />
            <Route path="/About" element={<About />} />
            <Route path="/CartContainer" element={<CartContainer />} />
            <Route path="/Portofolio" element={<Portofolio />} />
            <Route path="/details" element={<Details />} />
            <Route path="/cancel" element={<Cancel />} />
            {/* rutas privadas */}

            {/* <Route element={<Private />}>
               <Route path="/checkout" element={<PagPago />} />
            </Route> */}
         </Routes>
         <Footer />
      </BrowserRouter>
   );
};

export default Router;
