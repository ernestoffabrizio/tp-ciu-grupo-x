import { Link } from "react-router";
import { useCarrito } from "../../context/CarritoContext";
import { useState } from "react";
import CompraRapidaModal from "../Modal/CompraRapidaModal";

const ProductoCard = ({ productoActual }) => {
  // Evaluamos si el producto se quedó sin unidades
  //const sinStock = productoActual.stock === 0;

  const [mostrarModal, setMostrarModal] = useState(false);

  const sinStock = !productoActual.talles?.some(
    (talle) => talle.stock > 0
  ); 

  const { agregarAlCarrito } = useCarrito();
  return (
    <div className="d-flex flex-column h-100 p-2">
      {/* Al hacer clic en la imagen, también lleva al detalle */}
      <Link to={`/productos/${productoActual.id}`}>
        <img
          src={productoActual.imagen}
          alt={`Imagen de ${productoActual.nombre}`}
          title={productoActual.nombre}
          className="img-fluid mb-3"
          style={{ cursor: "pointer" }}
        />
      </Link>

      <h2 className="fs-6 m-0 text-dark">{productoActual.nombre}</h2>
      
      <p className="fw-bold my-2 text-dark">
        ${productoActual.precio.toLocaleString("es-AR", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2
        })}
      </p>

      {/* Contenedor de botones que se empuja hacia abajo para alinear las tarjetas */}
      <div className="mt-auto d-flex flex-column gap-2">
        <Link to={`/productos/${productoActual.id}`} className="btn btn-outline-dark btn-sm w-100">
          Ver detalle
        </Link>

        {sinStock ? (
          <button className="btn btn-secondary btn-sm w-100" disabled>
            Sin stock
          </button>
        ) : (
          <button 
            className="btn btn-dark btn-sm w-100" 
            onClick={() => setMostrarModal(true)}
          >
            Agregar al carrito
          </button>
        )}
      </div>
        <CompraRapidaModal
          show={mostrarModal}
          onHide={() => setMostrarModal(false)}
          producto={productoActual}
/>
    </div> 
  );
};

export default ProductoCard;