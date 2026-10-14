import { useParams, Link } from "react-router";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import productos from "../data/productos";
import GaleriaProducto from "../components/GaleriaProducto/GaleriaProducto";
import InformacionProducto from "../components/InformacionProductos/InformacionProducto";
import styles from "./DetalleProducto.module.css";
import notFoundStyles from "./NotFound.module.css";

function DetalleProducto() {
  const { id } = useParams();

  const producto = productos.find((producto) => producto.id === Number(id));

  if (!producto) {
    return (
      <Container className={notFoundStyles.contenedorNotFound}>
        <h1>Producto no encontrado</h1>
        <p>El producto que estás buscando no existe.</p>
        <Link to="/productos" className={notFoundStyles.enlaceInicio}>
          Volver al catálogo
        </Link>
      </Container>
    );
  }

  const agregarAlCarrito = (cantidad, talle) => {
    //conectarcon el carrito

    console.log(
      "Producto:",
      producto.id,
      "Cantidad:",
      cantidad,
      "Talle:",
      talle,
    );
  };

  return (
    <Container className={styles.contenedorDetalle}>
      <Row className="g-4">
        <Col xs={12} md={7}>
          <GaleriaProducto producto={producto} />
        </Col>

        <Col xs={12} md={5}>
          <InformacionProducto
            producto={producto}
            onAgregarAlCarrito={agregarAlCarrito}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default DetalleProducto;
