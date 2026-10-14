import { useState, useEffect } from "react";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import styles from "./GaleriaProducto.module.css";

function GaleriaProducto({ producto }) {
  const imagenes = producto.imagenes;

  const [indiceSeleccionado, setIndiceSeleccionado] = useState(0);

  useEffect(() => {
    setIndiceSeleccionado(0);
  }, [producto.id]);

  const mostrarAnterior = () => {
    setIndiceSeleccionado((indiceActual) =>
      indiceActual === 0 ? imagenes.length - 1 : indiceActual - 1
    );
  };

  const mostrarSiguiente = () => {
    setIndiceSeleccionado((indiceActual) =>
      indiceActual === imagenes.length - 1 ? 0 : indiceActual + 1
    );
  };

  return (
    <div className={styles.galeria}>
      <div className={styles.miniaturas}>
        {imagenes.map((imagen, indice) => (
          <Button
            key={`${imagen}-${indice}`}
            variant="light"
            className={`${styles.botonMiniatura} ${
              indiceSeleccionado === indice ? styles.seleccionada : ""
            }`}
            onClick={() => setIndiceSeleccionado(indice)}
            aria-label={`Ver imagen ${indice + 1} de ${producto.nombre}`}
            aria-pressed={indiceSeleccionado === indice}
          >
            <Image
              src={imagen}
              alt=""
              thumbnail
            />
          </Button>
        ))}
      </div>

      <div className={styles.contenedorImagenPrincipal}>
        <Button
          variant="light"
          className={`${styles.flecha} ${styles.flechaAnterior}`}
          onClick={mostrarAnterior}
          aria-label="Ver imagen anterior"
          disabled={imagenes.length < 2}
        >
          ←
        </Button>

        <div className={styles.imagenPrincipal}>
          <Image
            src={imagenes[indiceSeleccionado]}
            alt={`${producto.nombre}, imagen ${indiceSeleccionado + 1}`}
            fluid
          />
        </div>

        <Button
          variant="light"
          className={`${styles.flecha} ${styles.flechaSiguiente}`}
          onClick={mostrarSiguiente}
          aria-label="Ver imagen siguiente"
          disabled={imagenes.length < 2}
        >
          →
        </Button>
      </div>
    </div>
  );
}

export default GaleriaProducto;