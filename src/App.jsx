import { Routes, Route } from "react-router";
import Productos from "./pages/Productos"
import Inicio from "./pages/Inicio.jsx"
import DetalleProducto from "./pages/DetalleProducto.jsx"
import Header from "./components/Header/Header.jsx"
import Footer from "./components/Footer/Footer.jsx"
import NotFound from "./pages/NotFound.jsx"
import Contacto from "./pages/Contacto.jsx"
import Nosotros from "./pages/Nosotros.jsx"
import { CarritoProvider } from "./context/CarritoContext.jsx";

function App() {

  return (
      <CarritoProvider>
    <>

        <Header />

        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/productos/:id" element={<DetalleProducto />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />

    </>
      </CarritoProvider>
  );
}

export default App
