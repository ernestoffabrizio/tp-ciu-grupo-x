import { Link } from 'react-router';
import styles from './BotonProductos.module.css';

export default function BotonProductos() {
  
  // me ayudo la ia para q vuelva arriba ?
  const irArriba = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' 
    });
  };

  return (
    <div className={styles.contenedorBoton}>
      <Link 
        to="/productos" 
        className={styles.botonVerMas} 
        onClick={irArriba}
      >
        VER MÁS
      </Link>
    </div>
  );
}