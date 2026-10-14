import styles from "./Nosotros.module.css";

function Nosotros() {
  return (
    <section className={styles.contenedor}>
      <h2>Empresa</h2>

      <p>
        Somos una tienda especializada en zapatos de vestir que combina
        elegancia, comodidad y calidad. Nuestra propuesta está dirigida a
        quienes buscan el calzado ideal para ocasiones formales y para el día a día.
      </p>

      <p>
        El cliente es el centro de nuestro negocio. Por eso, ofrecemos una
        selección de modelos que se destacan por sus diseños, materiales y
        terminaciones, con opciones para acompañar distintos estilos y necesidades.
      </p>

      <p>
        Nuestro objetivo es brindar una experiencia de compra sencilla y
        satisfactoria, ayudando a cada cliente a encontrar el par de zapatos
        perfecto para cada ocasión.
      </p>
    </section>
  )
}

export default Nosotros