import { Routes, Route } from "react-router";
import Productos from "./pages/Productos"
import Inicio from "./pages/Inicio.jsx"
import DetalleProducto from "./pages/DetalleProducto.jsx"
import Header from "./components/Header.jsx"
import Footer from "./components/Footer.jsx"

function App() {

  return (
    <>
      <Header/>

      <Routes>
        <Route path="/" element={ <Inicio/> }/>
        <Route path="/productos" element={ <Productos/> }/>
        <Route path="/productos/:id" element={ <DetalleProducto/> }/>
        <Route path="*" element={ <notFound/> }/>
      </Routes>
      
      <Footer/>
    </>
  );
}

export default App
