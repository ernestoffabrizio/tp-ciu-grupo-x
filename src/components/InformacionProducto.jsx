import { useState } from "react";
import { Link } from "react-router";
import Button from "react-bootstrap/Button";
import styles from "./InformacionProducto.module.css";

function InformacionProducto({ producto, onAgregarAlCarrito }) {
  const [cantidad, setCantidad] = useState(1);

  const aumentarCantidad = () => {
    if (cantidad < producto.stock) {
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
    maximumFractionDigits: 2
  });

  const caracteristicas = producto.caracteristicas.filter(Boolean);

  return (
    <section className={styles.informacion}>
      <h1>{producto.nombre}</h1>

      <p className={styles.precio}>${precioFormateado}</p>

      <p className={styles.descripcion}>{producto.descripcion}</p>

      <p>
        <strong>Categoría:</strong> {producto.categoria}
      </p>

      <p>
        <strong>Stock:</strong>{" "}
        {producto.stock > 0 ? `${producto.stock} unidades disponibles` : "Sin stock"}
      </p>

      <div className={styles.caracteristicas}>
        <h2>Características principales</h2>

        {caracteristicas.length > 0 ? (
          <ul>
            {caracteristicas.map((caracteristica, indice) => (
              <li key={indice}>{caracteristica}</li>
            ))}
          </ul>
        ) : (
          <p>Próximamente más información.</p>
        )}
      </div>

      <div className={styles.controlesCantidad}>
        <Button
          variant="outline-secondary"
          onClick={disminuirCantidad}
          disabled={cantidad <= 1 || producto.stock === 0}
          aria-label="Disminuir cantidad"
        >
          −
        </Button>

        <span>{cantidad}</span>

        <Button
          variant="outline-secondary"
          onClick={aumentarCantidad}
          disabled={cantidad >= producto.stock}
          aria-label="Aumentar cantidad"
        >
          +
        </Button>
      </div>

      <Button
        variant="dark"
        className={styles.botonCarrito}
        onClick={() => onAgregarAlCarrito(cantidad)}
        disabled={producto.stock === 0}
      >
        {producto.stock > 0 ? "Agregar al carrito" : "Sin stock"}
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