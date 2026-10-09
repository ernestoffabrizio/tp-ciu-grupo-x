import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router';
import styles from './GridCards.module.css';
import productos from '../data/productos';

export default function GridCards() {
  const productosDestacados = productos.slice(0, 6);

  return (
    <section className={styles.seccionProductos}>
      <Row xs={1} sm={2} lg={3} className="g-5">
        {productosDestacados.map((producto) => (
          <Col key={producto.id}>
            <Card className={`h-100 ${styles.tarjetaProducto}`}>
              <Link to={`/productos/${producto.id}`}>
                <Card.Img
                  variant="top"
                  src={producto.imagen}
                  alt={producto.nombre}
                  title={producto.nombre}
                  className={styles.imagenProducto}
                />
              </Link>
              <Card.Body className="text-center p-0 mt-3">
                <Card.Title className={styles.tituloProducto}>
                  <Link to={`/productos/${producto.id}`} className={styles.enlaceTitulo}>
                    {producto.nombre}
                  </Link>
                </Card.Title>
                <div className={styles.precioNormal}>
                  ${producto.precio}
                </div>
                <div className={styles.textoDespacho}>
                  {producto.textoDespacho || "Se despacha dentro de 10 días hábiles."}
                </div>
                <hr className={styles.separador} />
                <div className={styles.precioTransferencia}>
                  <span className={styles.precioBold}>
                    ${producto.precioTransferencia || producto.precio}
                  </span> con transferencia
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </section>
  );
}
