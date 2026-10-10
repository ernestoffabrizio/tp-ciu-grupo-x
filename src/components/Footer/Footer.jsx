import { Link } from 'react-router';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.contenedorFooter}>
      <div className={styles.contenidoFooter}>
        <div className={styles.columna}>
          <h4 className={styles.tituloColumna}>Nosotros</h4>
          <Link to="/nosotros" className={styles.enlace}>Acerca de Nosotros</Link>
          <Link to="/contacto" className={styles.enlace}>Contacto</Link>
        </div>
        <div className={styles.columnaCentro}>
          <h2 className={styles.logoFooter}>cammelcase</h2>
        </div>
        <div className={styles.columna}>
          <h4 className={styles.tituloColumna}>Redes Sociales</h4>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className={styles.enlace}>Instagram</a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer" className={styles.enlace}>Facebook</a>
        </div>
      </div>
    </footer>
  );
}