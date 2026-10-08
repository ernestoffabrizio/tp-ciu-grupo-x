import styles from './Separador.module.css';

export default function Separador({ texto = "Todos los productos" }) {
  return (
    <div className={styles.contenedorSeparador}>
      <h2 className={styles.titulo}>{texto}</h2>
    </div>
  );
}