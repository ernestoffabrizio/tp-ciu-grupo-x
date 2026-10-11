import { useState, useEffect } from "react";
import { Link } from "react-router";
import Button from "react-bootstrap/Button";
import styles from "./InformacionProducto.module.css";

function InformacionProducto({ producto, onAgregarAlCarrito }) {
  const [talleSeleccionado, setTalleSeleccionado] = useState(null);
  const [cantidad, setCantidad] = useState(1);

  const talleActual = producto.talles.find(
    (talle) => talle.numero === talleSeleccionado
  );

  const stockDisponible = talleActual ? talleActual.stock : 0;

  useEffect(() => {
    setTalleSeleccionado(null);
    setCantidad(1);
  }, [producto.id]);

  const seleccionarTalle = (numero) => {
    setTalleSeleccionado(numero);
    setCantidad(1);
  };

  const aumentarCantidad = () => {
    if (cantidad < stockDisponible) {
      setCantidad(cantidad + 1);
    }
  };

  const disminuirCantidad = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
    }
  };

  const precioFormateado = producto.precio.toLocaleString("es-AR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  const precioTransferencia = producto.precio * 0.90;

  const precioTransferenciaFormateado =
    precioTransferencia.toLocaleString("es-AR", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

  return (
    <section className={styles.informacion}>
      <h1>{producto.nombre}</h1>

      <p className={styles.precio}>
        ${precioFormateado}
      </p>

      <p className={styles.precioTransferencia}>
        <strong>${precioTransferenciaFormateado}</strong> con transferencia
      </p>

      <p className={styles.descripcion}>{producto.descripcion}</p>

      <p>
        <strong>Categoría:</strong> {producto.categoria}
      </p>

      <div className={styles.seccionTalles}>
        <p><strong>Elegí tu talle:</strong></p>

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

      <Button
        variant="dark"
        className={styles.botonCarrito}
        onClick={() => onAgregarAlCarrito(cantidad, talleSeleccionado)}
        disabled={!talleActual || stockDisponible === 0}
      >
        {!talleActual
          ? "Elegí tu talle"
          : "Agregar al carrito"}
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