import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router';
import carrusel1 from "../../media/carrusel1.jpg"
import carrusel2 from "../../media/carrusel2.jpg"
import carrusel3 from "../../media/carrusel3.jpg"
import styles from './Carousel.module.css';

function CarouselFadeExample() {
  return (
    <div className={styles.contenedorCarrusel}>
      <Carousel fade>
        <Carousel.Item>
            <Link to="/productos/1">
                <img
                    className={`d-block w-100 ${styles.imagenCarrusel}`}
                    src={carrusel1}
                    alt="Zapato de cuero"
                />
            </Link>
        </Carousel.Item>
        <Carousel.Item>
            <Link to="/productos/2">
                <img
                    className={`d-block w-100 ${styles.imagenCarrusel}`}
                    src={carrusel2}
                    alt="Zapato de cuero"
                />
            </Link>
        </Carousel.Item>
        <Carousel.Item>
            <Link to="/productos/3">
                <img
                    className={`d-block w-100 ${styles.imagenCarrusel}`}
                    src={carrusel3}
                    alt="Zapato de cuero"
                />
            </Link>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CarouselFadeExample;