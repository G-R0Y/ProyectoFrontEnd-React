import { Navigate } from "react-router-dom";
import { useAuth } from "../Contexts/AuthContext";

// aqui pondre  las paginas que necesitaran ser autenticadas para poder ingresar
export function ProtectedRouter({ children }) {
   const { user, loading } = useAuth();

   if (loading) return <h1>Loading</h1>;

   if (!user) return <Navigate to="/login" />;
   return <>{children}</>;
}
