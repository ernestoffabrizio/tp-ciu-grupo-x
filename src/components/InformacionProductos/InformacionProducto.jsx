import { useState, useEffect } from "react";
import { Link } from "react-router";
import styles from "./InformacionProducto.module.css";
import { useCarrito } from "../../context/CarritoContext";
import formatoPrecio from "../../utils/formatoPrecio";
import { Alert, Button } from "react-bootstrap";

function InformacionProducto({ producto }) {
  const [talleSeleccionado, setTalleSeleccionado] = useState(null);
  const [cantidad, setCantidad] = useState(1);
  const [mensaje, setMensaje] = useState("");
  const [tipoMensaje, setTipoMensaje] = useState("success");

  // Obtenemos el carrito y la función agregar del contexto
  const { carrito, agregarAlCarrito } = useCarrito();

  const talleActual = producto.talles.find(
    (talle) => talle.numero === talleSeleccionado,
  );

  const stockDisponible = talleActual ? talleActual.stock : 0;

  // Calculamos cuántas unidades de este modelo y talle ya están en el carrito
  const itemEnCarrito = carrito.find(
    (item) =>
      item.id === producto.id &&
      (item.talleElegido === talleSeleccionado || item.talle === talleSeleccionado)
  );
  const cantidadEnCarrito = itemEnCarrito ? itemEnCarrito.cantidad : 0;

  useEffect(() => {
    setTalleSeleccionado(null);
    setCantidad(1);
    setMensaje("");
  }, [producto.id]);

  const seleccionarTalle = (numero) => {
    setTalleSeleccionado(numero);
    setCantidad(1);
    setMensaje("");
  };

  const aumentarCantidad = () => {
    if (cantidad < stockDisponible) {
      setCantidad(cantidad + 1);
      setMenasaje("");
    }
  };

  const disminuirCantidad = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
      setMensaje("");
    }
  };

  // Manejador de agregar al carrito con validación de tope
  const handleAgregarAlCarrito = () => {
    if (!talleActual) {
      setTipoMensaje("danger");
      setMensaje("Seleccioná un talle antes de continuar.")
      return
    };

    // Si lo que ya hay en el carrito más lo que se quiere agregar supera el stock del talle
    if (cantidadEnCarrito + cantidad > talleActual.stock) {
      setTipoMensaje("warning")
      setMensaje(
        "No se pudo agregar. Revisá el stock disponible de ese talle."
      );
      return;
    }

    const agregado = agregarAlCarrito(producto, cantidad, talleSeleccionado);

    // Si la función del contexto retorna false al no poder agregar
    if (agregado === false) {
      setTipoMensaje("warning")
      setMensaje(
        "No se pudo agregar. Revisá el stock disponible de ese talle."
      );
      return;
    }
    setTipoMensaje("success");
    setMensaje(
      `¡${producto.nombre} (T${talleSeleccionado}) agregado al carrito!`
    );
  };

  const precioFormateado = formatoPrecio(producto.precio);
  const precioDescuento = producto.precio * 0.9;
  const precioDescuentoFormateado = formatoPrecio(precioDescuento);

  return (
    <section className={styles.informacion}>
      <h1>{producto.nombre}</h1>

      <p className={styles.precio}>${precioFormateado}</p>

      <p className={styles.precioDescuento}>
        <strong>${precioDescuentoFormateado}</strong> con efectivo o transferencia
      </p>

      <p className={styles.descripcion}>{producto.descripcion}</p>

      <p>
        <strong>Categoría:</strong> {producto.categoria}
      </p>

      <div className={styles.seccionTalles}>
        <p>
          <strong>Elegí tu talle:</strong>
        </p>

        <div className={styles.botonesTalles}>
          {producto.talles.map((talle) => (
            <Button
              key={talle.numero}
              variant={
                talleSeleccionado === talle.numero
                  ? "dark"
                  : "outline-secondary"
              }
              onClick={() => seleccionarTalle(talle.numero)}
              disabled={talle.stock === 0}
              aria-pressed={talleSeleccionado === talle.numero}
              aria-label={
                talle.stock === 0
                  ? `Talle ${talle.numero}, sin stock`
                  : `Seleccionar talle ${talle.numero}`
              }
            >
              {talle.numero}
            </Button>
          ))}
        </div>

        {!talleActual ? (
          <p>Seleccioná un talle para consultar su disponibilidad.</p>
        ) : (
          <p>
            <strong>Stock:</strong>{" "}
            {stockDisponible > 0
              ? `${stockDisponible} unidades disponibles`
              : "Sin stock"}
          </p>
        )}
      </div>

      <div className={styles.controlesCantidad}>
        <Button
          variant="outline-secondary"
          onClick={disminuirCantidad}
          disabled={!talleActual || cantidad <= 1}
          aria-label="Disminuir cantidad"
        >
          −
        </Button>

        <span>{cantidad}</span>

        <Button
          variant="outline-secondary"
          onClick={aumentarCantidad}
          disabled={!talleActual || cantidad >= stockDisponible}
          aria-label="Aumentar cantidad"
        >
          +
        </Button>
      </div>

      {/* Cartel de aviso cuando se alcanza el stock máximo */}
      {mensaje && (
        <Alert variant={tipoMensaje} className="mt-3 mb-3">
          {mensaje}
        </Alert>
      )}

      <Button
        variant="dark"
        className={styles.botonCarrito}
        onClick={handleAgregarAlCarrito}
        disabled={!talleActual || stockDisponible === 0}
      >
        {!talleActual ? "Elegí tu talle" : "Agregar al carrito"}
      </Button>

      <Button
        as={Link}
        to="/productos"
        variant="outline-dark"
        className="w-100"
      >
        Volver al catálogo
      </Button>
    </section>
  );
}

export default InformacionProducto;