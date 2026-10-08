import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.contenedorFooter}>
      <div className={styles.contenidoFooter}>
        <div className={styles.columna}>
          <h4 className={styles.tituloColumna}>Navegación?</h4>
          <a href="/productos" className={styles.enlace}>Productos</a>
          <a href="/informacion" className={styles.enlace}>Información</a>
          <a href="/contacto" className={styles.enlace}>Contacto</a>
        </div>
        <div className={styles.columnaCentro}>
          <h2 className={styles.logoFooter}>cammelcase</h2>
        </div>
        <div className={styles.columna}>
          <h4 className={styles.tituloColumna}>Contacto</h4>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className={styles.enlace}>Instagram</a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer" className={styles.enlace}>Facebook</a>
          <a href="mailto:hola@tu-tienda.com" className={styles.enlace}>cammelcase@gmail.com</a>
        </div>
      </div>
    </footer>
  );
}