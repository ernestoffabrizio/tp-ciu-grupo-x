import { useParams, Link } from "react-router";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import productos from "../data/productos";
import GaleriaProducto from "../components/GaleriaProducto";
import InformacionProducto from "../components/InformacionProducto";
import styles from "./DetalleProducto.module.css";

function DetalleProducto() {
  const { id } = useParams();

  const producto = productos.find(
    (producto) => producto.id === Number(id)
  );

  if (!producto) {
    return (
      <Container className="py-5 text-center">
        <h2>Producto no encontrado</h2>
        <Button as={Link} to="/productos" variant="dark">
          Volver al catálogo
        </Button>
      </Container>
    );
  }

  const agregarAlCarrito = (cantidad) => {
    //conectarcon el carrito
    console.log("Producto:", producto.id, "Cantidad:", cantidad);
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