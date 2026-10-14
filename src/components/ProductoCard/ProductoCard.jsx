import { Link } from "react-router";

const ProductoCard = ({ productoActual, agregarAlCarrito }) => {
  // Evaluamos si el producto se quedó sin unidades
  const sinStock = productoActual.stock === 0;

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
            onClick={() => agregarAlCarrito && agregarAlCarrito(productoActual)}
          >
            Agregar al carrito
          </button>
        )}
      </div>
    </div> 
  );
};

export default ProductoCard;