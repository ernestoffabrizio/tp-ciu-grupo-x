import { Link } from "react-router";
import Container from "react-bootstrap/Container";
import styles from "./NotFound.module.css";

function NotFound() {
  return (
    <Container className={styles.contenedorNotFound}>
      <h1>Error - 404</h1>

      <p>La página que estás buscando no existe.</p>

      <Link to="/" className={styles.enlaceInicio}>
        Regresar al inicio
      </Link>
    </Container>
  );
}

export default NotFound;
