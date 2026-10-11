import Button from "react-bootstrap/Button";

function CarritoItem({
  producto,
  onAumentar,
  onDisminuir,
  onEliminar
}) {
  const precioFormateado = producto.precio.toLocaleString("es-AR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });

  const subtotal = producto.precio * producto.cantidad;

  //le da formato al precio.
  const subtotalFormateado = subtotal.toLocaleString("es-AR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });

  return (
    <div className="d-flex gap-3 align-items-center border-bottom py-3">
      <img
        src={producto.imagen}
        alt={producto.nombre}
        style={{ width: "100px", objectFit: "contain" }}
      />

      <div className="flex-grow-1">
        <h5>{producto.nombre}</h5>

        <p className="mb-1">Talle: {producto.talle}</p>

        <p className="mb-1">
          Precio unitario: ${precioFormateado}
        </p>

        <div className="d-flex align-items-center gap-2 my-2">
          <Button
            variant="outline-dark"
            size="sm"
            onClick={() => onDisminuir(producto)}
            disabled={producto.cantidad <= 1}
          >
            −
          </Button>

          <span>{producto.cantidad}</span>

          <Button
            variant="outline-dark"
            size="sm"
            onClick={() => onAumentar(producto)}
            disabled={producto.cantidad >= producto.stock}
          >
            +
          </Button>
        </div>

        <p className="mb-2">
          Subtotal: ${subtotalFormateado}
        </p>

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