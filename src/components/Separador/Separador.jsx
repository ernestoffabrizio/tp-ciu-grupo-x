import styles from './Separador.module.css';

export default function Separador({ texto = "Novedades" }) {
  return (
    <div className={styles.contenedorSeparador}>
      <h2 className={styles.titulo}>{texto}</h2>
    </div>
  );
}