import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../Contexts/AuthContext";

export default function Navbar() {
   const { authUser } = useAuth();
   const [activeMobileMenu, setActiveMobileMenu] = useState(false);

   return (
      <div>
         <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-lg">
            <div className="container-fluid">
               <Link to="/">
                  <span className="navbar-brand">
                     <span className="font-semibold text-gray-500 text-lg">
                        Registro
                     </span>
                     {authUser && (
                        <img
                           className="w-25 px-2 rounded-circle"
                           src={authUser.photoURL}
                        ></img>
                     )}
                  </span>
               </Link>
               <button
                  className="navbar-toggler"
                  type="button"
                  onClick={() => setActiveMobileMenu(!activeMobileMenu)}
               >
                  <span className="navbar-toggler-icon"></span>
               </button>
               <div
                  className={
                     !activeMobileMenu
                        ? "collapse navbar-collapse"
                        : "navbar-collapse"
                  }
               >
                  <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                     {authUser && (
                        <li className="nav-item">
                           <Link to="/">
                              <Link className="nav-link active">Home</Link>
                           </Link>
                        </li>
                     )}
                     {!authUser && (
                        <li className="nav-item">
                           <Link to="/login">
                              <span className="nav-link">Login</span>
                           </Link>
                        </li>
                     )}
                     {!authUser && (
                        <li className="nav-item">
                           <Link to="/register">
                              <span className="nav-link">Register</span>
                           </Link>
                        </li>
                     )}
                     {authUser && (
                        <li className="nav-item">
                           <Link to="/logout">
                              <span className="nav-link">Logout</span>
                           </Link>
                        </li>
                     )}
                  </ul>
               </div>
            </div>
         </nav>
      </div>
   );
}
