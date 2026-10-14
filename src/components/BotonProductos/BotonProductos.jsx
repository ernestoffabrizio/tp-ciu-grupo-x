import { Link } from 'react-router';
import styles from './BotonProductos.module.css';

export default function BotonProductos() {
  
  return (
    <div className={styles.contenedorBoton}>
      <Link 
        to="/productos" 
        className={styles.botonVerMas} 
      >
        VER TODOS LOS PRODUCTOS
      </Link>
    </div>
  );
}