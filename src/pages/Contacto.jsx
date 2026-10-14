
import styles from "./Contacto.module.css";

function Contacto() {
  return (
    <main className={styles.contacto}>
      <h1>Contacto</h1>
      <p className={styles.subtitulo}>
        No dudes en comunicarte con nosotros
      </p>

      <section className={styles.informacion}>
        <h2>Información</h2>

        <div className={styles.datos}>
          <div className={styles.dato}>
            <h3>Dirección</h3>
            <p>Av. Cabildo 1704</p>
            <p>Belgrano, CABA</p>
          </div>

          <div className={styles.dato}>
            <h3>Teléfono</h3>
            <p>(011) 1234-5678</p>
          </div>

          <div className={styles.dato}>
            <h3>Whatsapp</h3>
            <p>+5491122334455</p>
          </div>

          <div className={styles.dato}>
            <h3>Horario de atención</h3>
            <p>Lunes a viernes: 9:00 a 20:00</p>
            <p>Sábados: 9:00 a 14:00</p>
          </div>
        </div>
      </section>

      <section className={styles.ubicacion}>
        <h2>¿Dónde estamos?</h2>

        <iframe
          className={styles.mapa}
          title="Ubicación de cammelcase"
          src="https://maps.google.com/maps?q=Buenos%20Aires%2C%20Argentina&output=embed"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </main>
  );
}

export default Contacto;
