import Carousel from 'react-bootstrap/Carousel';
import ejemplo1 from "../../media/Ejemplo.png"
import ejemplo2 from "../../media/Ejemplo2.png"
import ejemplo3 from "../../media/Ejemplo3.png"
import styles from './Carousel.module.css';

function CarouselFadeExample() {
  return (
    <div className={styles.contenedorCarrusel}>
      <Carousel fade>
        <Carousel.Item>
            <a href="/producto1">
                <img
                    className={`d-block w-100 ${styles.imagenCarrusel}`}
                    src={ejemplo1}
                    alt="ejemplo1"
                />
            </a>
        </Carousel.Item>
        <Carousel.Item>
            <a href="/producto2">
                <img
                    className={`d-block w-100 ${styles.imagenCarrusel}`}
                    src={ejemplo2}
                    alt="ejemplo2"
                />
            </a>
        </Carousel.Item>
        <Carousel.Item>
            <a href="/producto3">
                <img
                    className={`d-block w-100 ${styles.imagenCarrusel}`}
                    src={ejemplo3}
                    alt="ejemplo3"
                />
            </a>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CarouselFadeExample;