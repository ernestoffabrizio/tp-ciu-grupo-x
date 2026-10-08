import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import styles from './GridCards.module.css';
import producto4 from '../../media/Ejemplo4.png';

// ejemplo, no se coom vamos a hacer para vincularlo dps con otros productos ?
const productoBase = { 
  titulo: "ejemplo 1", 
  precioLista: "$35.280,00",
  textoDespacho: "Se despacha dentro de 10 días hábiles.",
  precioTransferencia: "$33.516,00",
  imagen: producto4 
};

const listaProductos = Array.from({ length: 6 }, (_, index) => ({
  ...productoBase,
  id: index + 1
}));

export default function ProductGrid() {
  return (
    <section className={styles.seccionProductos}>
      
      <Row xs={1} sm={2} lg={3} className="g-5">
        
        {listaProductos.map((producto) => (
          <Col key={producto.id}>
            <Card className={`h-100 ${styles.tarjetaProducto}`}>
              <Card.Img 
                variant="top" 
                src={producto.imagen} 
                alt={producto.titulo}
                className={styles.imagenProducto}
              />
              <Card.Body className="text-center p-0">
                
                <Card.Title className={styles.tituloProducto}>
                  {producto.titulo}
                </Card.Title>
                
                <div className={styles.precioNormal}>
                  {producto.precioLista}
                </div>
                
                <div className={styles.textoDespacho}>
                  {producto.textoDespacho}
                </div>
                
                <hr className={styles.separador} />
                
                <div className={styles.precioTransferencia}>
                  <span className={styles.precioBold}>{producto.precioTransferencia}</span> con transferencia
                </div>

              </Card.Body>
            </Card>
          </Col>
        ))}
        
      </Row>
    </section>
  );
}