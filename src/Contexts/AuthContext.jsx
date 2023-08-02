import { createContext, useContext, useEffect, useState } from "react";
import {
   createUserWithEmailAndPassword,
   signInWithEmailAndPassword,
   signOut,
   onAuthStateChanged,
   GoogleAuthProvider,
   signInWithPopup,
   sendPasswordResetEmail,
} from "firebase/auth";
import { auth } from "../utils/firebase";

// creando el contexto
const authContext = createContext();

// hook para export el contexto useAuth
export const useAuth = () => {
   const context = useContext(authContext);

   // si no se encuentra el contexto en el arbol de componentes - probando
   if (!context) {
      throw new Error("useAuth debe estar dentro del proveedor AuthProvider");
   }
   return context;
};

export function AuthProvider({ children }) {
   const [user, setUser] = useState(null);
   const [loading, setLoading] = useState(true);

   const signup = (email, password) => {
      createUserWithEmailAndPassword(auth, email, password);
      console.log(email, password);
   };
   const login = async (email, password) => {
      signInWithEmailAndPassword(auth, email, password);
      console.log(email, password);
   };
   // para iniciar sesion con google
   const loginWithGoogle = () => {
      const googleProvider = new GoogleAuthProvider();
      return signInWithPopup(auth, googleProvider);
   };

   // para cerrar la sesion
   const logout = () => {
      signOut(auth);
   };
   // para resetear la contraseña
   const resetPassword = async (email) => sendPasswordResetEmail(auth, email);
   // funcion especial para que los datos ingresados por imail y password se guarden en el estado
   useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
         setUser(currentUser);
         // para que no se muestre el loading si ya cargo de lo contrario lo cargara
         setLoading(false);
      });
      return () => unsubscribe();
   }, []);
   // exportando el contexto para que otros componentes lo puedan usar
   return (
      <authContext.Provider
         value={{
            signup,
            login,
            user,
            logout,
            loading,
            loginWithGoogle,
            resetPassword,
         }}
      >
         {children}
      </authContext.Provider>
   );
}
