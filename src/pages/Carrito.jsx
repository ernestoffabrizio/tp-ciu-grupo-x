import Button from "react-bootstrap/Button";
import CarritoItem from "../components/Carrito/CarritoItem";
import { useCarrito } from "../context/CarritoContext";

function Carrito() {
  const {
    carrito,
    aumentarCantidad,
    disminuirCantidad,
    quitarDelCarrito,
    vaciarCarrito,
  } = useCarrito();

  const total = carrito.reduce(
    (acumulado, producto) => acumulado + producto.precio * producto.cantidad,
    0,
  );

  const cantidadTotal = carrito.reduce(
    (acumulado, producto) => acumulado + producto.cantidad,
    0,
  );

  const formatoPrecio = (precio) =>
    precio.toLocaleString("es-AR", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
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
              key={`${producto.id}-${producto.talleElegido}`}
              producto={producto}
              onAumentar={aumentarCantidad}
              onDisminuir={disminuirCantidad}
              onEliminar={quitarDelCarrito}
            />
          ))}

          <div className="mt-4 text-end">
            <p>Unidades: {cantidadTotal}</p>

            <h3>Total: ${formatoPrecio(total)}</h3>

            <Button variant="outline-danger" onClick={vaciarCarrito}>
              Vaciar carrito
            </Button>
          </div>
        </>
      )}
    </div>
  );
}

export default Carrito;