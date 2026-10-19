import Button from "react-bootstrap/Button";
import formatoPrecio from "../../utils/formatoPrecio";

function CarritoItem({ producto, onAumentar, onDisminuir, onEliminar }) {
  const subtotal = producto.precio * producto.cantidad;

  return (
    <div className="d-flex gap-3 align-items-center border-bottom py-3">
      <img
        src={producto.imagen}
        alt={producto.nombre}
        style={{ width: "100px", height: "120px", objectFit: "contain" }}
      />

      <div className="flex-grow-1">
        <h5>{producto.nombre}</h5>

        <p className="mb-1">Talle: {producto.talleElegido}</p>

        <p className="mb-1">
          Precio unitario: ${formatoPrecio(producto.precio)}
        </p>

        <div className="d-flex align-items-center gap-2 my-2">
          <Button
            variant="outline-dark"
            size="sm"
            onClick={() => onDisminuir(producto)}
            disabled={producto.cantidad <= 1}
            aria-label="Disminuir cantidad"
          >
            −
          </Button>

          <span>{producto.cantidad}</span>

          <Button
            variant="outline-dark"
            size="sm"
            onClick={() => onAumentar(producto)}
            disabled={producto.cantidad >= producto.stockDisponible}
            aria-label="Aumentar cantidad"
          >
            +
          </Button>
        </div>

        <p className="mb-2">Subtotal: ${formatoPrecio(subtotal)}</p>

        <Button
          variant="outline-danger"
          size="sm"
          onClick={() => onEliminar(producto)}
        >
          Eliminar
        </Button>
      </div>
    </div>
  );
}

export default CarritoItem;
