import { BrowserRouter, Routes, Route } from "react-router-dom"
import PagInicio from "./Paginas/PagInicio"
import Footer from "./Componentes/Footer"
import Header from "./Componentes/Header"

function App() {
  return (
    <BrowserRouter>
      <Header />

      <PagInicio />

      <Footer />
    </BrowserRouter>
  )
}

export default App