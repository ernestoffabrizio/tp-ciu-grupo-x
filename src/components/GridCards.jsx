import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router';
import styles from './GridCards.module.css';
import productos from '../data/productos';

// ejemplo, no se coom vamos a hacer para vincularlo dps con otros productos ?
// const productoBase = { 
//   titulo: "ejemplo 1", 
//   precioLista: "$35.280,00",
//   textoDespacho: "Se despacha dentro de 10 días hábiles.",
//   precioTransferencia: "$33.516,00",
//   imagen: producto4 
// };

// const listaProductos = Array.from({ length: 6 }, (_, index) => ({
//   ...productoBase,
//   id: index + 1
// }));


export default function GridCards() {
  const productosDestacados = productos.slice(0, 6);

  return (
    <section className={styles.seccionProductos}>
      <Row xs={1} sm={2} lg={3} className="g-5">
        {productosDestacados.map((producto) => (
          <Col key={producto.id}>
            <Card className={`h-100 ${styles.tarjetaProducto}`}>
              <Card.Img
                variant="top"
                src={producto.imagen}
                alt={producto.nombre}
                className={styles.imagenProducto}
              />

              <Card.Body className="text-center">
                <Card.Title className={styles.tituloProducto}>
                  {producto.nombre}
                </Card.Title>

                <div className={styles.precioNormal}>
                  ${producto.precio}
                </div>

                <Link
                  to={`/productos/${producto.id}`}
                  className="btn btn-outline-dark mt-3"
                >
                  Ver detalle
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </section>
  );
}
