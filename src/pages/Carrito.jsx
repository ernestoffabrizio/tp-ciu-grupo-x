import Button from "react-bootstrap/Button";
import CarritoItem from "../components/Carrito/CarritoItem";

function Carrito({
  carrito,
  onAumentar,
  onDisminuir,
  onEliminar,
  onVaciar
}) {
  const total = carrito.reduce(
    (acumulado, producto) =>
      acumulado + producto.precio * producto.cantidad,
    0
  );

  const cantidadTotal = carrito.reduce(
    (acumulado, producto) => acumulado + producto.cantidad,
    0
  );

  const totalFormateado = total.toLocaleString("es-AR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });

  return (
    <div className="container py-4">
      <h1>Mi carrito</h1>

      {carrito.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        <>
          {carrito.map((producto) => (
            <CarritoItem
              key={`${producto.id}-${producto.talle}`}
              producto={producto}
              onAumentar={onAumentar}
              onDisminuir={onDisminuir}
              onEliminar={onEliminar}
            />
          ))}

          <div className="mt-4 text-end">
            <p>Unidades: {cantidadTotal}</p>

            <h3>Total: ${totalFormateado}</h3>

            <Button
              variant="outline-danger"
              onClick={onVaciar}
            >
              Vaciar carrito
            </Button>
          </div>
        </>
      )}
    </div>
  );
}

export default Carrito;
