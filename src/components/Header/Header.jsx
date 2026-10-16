import { useState, useEffect, useRef } from "react";
import styles from "./Header.module.css";
import { Link } from "react-router";
import { useCarrito } from "../../context/CarritoContext";
import productos from "../../data/productos";

export default function Header() {
  const [mostrarBuscador, setMostrarBuscador] = useState(false);
  const [menuMovilAbierto, setMenuMovilAbierto] = useState(false);
  const [carritoAbierto, setCarritoAbierto] = useState(false);
  const [busqueda, setBusqueda] = useState("");
  const referenciaNavegacion = useRef(null);
  const { carrito, aumentarCantidad, disminuirCantidad, quitarDelCarrito } =
    useCarrito();

  const totalItemsCarrito = carrito.reduce(
    (sum, item) => sum + item.cantidad,
    0,
  );

  const costoTotalCarrito = carrito.reduce(
    (sum, item) => sum + item.precio * item.cantidad,
    0,
  );

  const formatoPrecio = (precio) =>
    precio.toLocaleString("es-AR", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

  useEffect(() => {
    function manejarClicFuera(evento) {
      if (
        referenciaNavegacion.current &&
        !referenciaNavegacion.current.contains(evento.target)
      ) {
        setMostrarBuscador(false);
        setMenuMovilAbierto(false);
      }
    }

    document.addEventListener("mousedown", manejarClicFuera);
    return () => {
      document.removeEventListener("mousedown", manejarClicFuera);
    };
  }, []);

  useEffect(() => {
    function manejarEscape(evento) {
      if (evento.key === "Escape") {
        setCarritoAbierto(false);
        setMostrarBuscador(false);
        setMenuMovilAbierto(false);
      }
    }

    document.addEventListener("keydown", manejarEscape);

    return () => {
      document.removeEventListener("keydown", manejarEscape);
    };
  }, []);

  const productosFiltrados = productos.filter((producto) => {
    const texto = busqueda.trim().toLowerCase();

    if (!texto) return false;

    return (
      producto.nombre.toLowerCase().includes(texto) ||
      producto.categoria.toLowerCase().includes(texto)
    );
  });

  return (
    <header className={styles.encabezadoNavegacion} ref={referenciaNavegacion}>
      <div className={styles.franjaSuperior}></div>

      <div className={styles.barraContenido}>
        {/* Navegación principal */}
        <nav
          className={`${styles.columnaNavegacion} ${styles.columnaIzquierda}`}
          aria-label="Menú principal"
        >
          <button
            className={styles.botonHamburguesa}
            onClick={() => setMenuMovilAbierto((abierto) => !abierto)}
            aria-label={menuMovilAbierto ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menuMovilAbierto}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          <div
            className={`${styles.enlacesPrincipales} ${menuMovilAbierto ? styles.abierto : ""}`}
          >
            <Link
              to="/"
              className={styles.enlaceNavegacion}
              onClick={() => setMenuMovilAbierto(false)}
            >
              INICIO
            </Link>

            <Link
              to="/productos"
              className={styles.enlaceNavegacion}
              onClick={() => setMenuMovilAbierto(false)}
            >
              PRODUCTOS
            </Link>
          </div>
        </nav>

        {/* logo central */}
        <div className={`${styles.columnaNavegacion} ${styles.columnaCentro}`}>
          <Link
            to="/"
            className={styles.enlaceLogotipo}
            aria-label="camelcase, ir al inicio"
          >
            <div className={styles.logotipoTexto}>
              <svg
                className={styles.flechaDecorativaLogo}
                viewBox="0 0 70 8"
                aria-hidden="true"
              >
                <path d="M0 4 L5 1 L4 4 L5 7 Z" fill="currentColor" />
                <line
                  x1="4"
                  y1="4"
                  x2="68"
                  y2="4"
                  stroke="currentColor"
                  strokeWidth="1.2"
                />
                <polygon points="68,2 72,4 68,6" fill="currentColor" />
              </svg>
              <span>camelcase</span>
            </div>
          </Link>
        </div>

        {/* contacto, lupita y carrito */}
        <div className={`${styles.columnaNavegacion} ${styles.columnaDerecha}`}>
          <Link
            to="/contacto"
            className={`${styles.enlaceNavegacion} ${styles.enlaceContacto}`}
          >
            CONTACTO
          </Link>
          <button
            type="button"
            className={styles.botonIconoAccion}
            onClick={() => setMostrarBuscador((mostrar) => !mostrar)}
            aria-label={mostrarBuscador ? "Cerrar buscador" : "Abrir buscador"}
            aria-expanded={mostrarBuscador}
          >
            <svg
              className={styles.iconoSvg}
              fill="none"
              stroke="currentColor"
              strokeWidth="2.4"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <circle cx="11" cy="11" r="7" />
              <path strokeLinecap="round" d="M21 21l-4.35-4.35" />
            </svg>
          </button>

          {/* botón del carrito */}
          <button
            type="button"
            className={styles.botonAbrirCarrito}
            onClick={() => setCarritoAbierto(true)}
            aria-label={`Ver carrito, ${totalItemsCarrito} unidades`}
            aria-expanded={carritoAbierto}
          >
            <svg
              className={styles.iconoSvg}
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
            </svg>
            <span className={styles.contadorCarrito}>{totalItemsCarrito}</span>
          </button>
        </div>
      </div>

      {/* Buscador */}
      {mostrarBuscador && (
        <div className={styles.barraBusquedaFlotante}>
          <input
            type="text"
            className={styles.campoBusqueda}
            placeholder="Buscar productos..."
            autoFocus
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            aria-label="Buscar productos"
          />
          {busqueda.trim() !== "" && (
            <div className={styles.resultadosBusqueda}>
              {productosFiltrados.length > 0 ? (
                productosFiltrados.map((producto) => (
                  <Link
                    key={producto.id}
                    to={`/productos/${producto.id}`}
                    className={styles.resultadoBusqueda}
                    onClick={() => {
                      setMostrarBuscador(false);
                      setBusqueda("");
                    }}
                  >
                    <img
                      src={producto.imagen}
                      alt=""
                      className={styles.imagenResultadoBusqueda}
                    />

                    <div>
                      <span className={styles.nombreResultadoBusqueda}>
                        {producto.nombre}
                      </span>

                      <span className={styles.precioResultadoBusqueda}>
                        ${producto.precio.toLocaleString("es-AR")}
                      </span>
                    </div>
                  </Link>
                ))
              ) : (
                <p className={styles.sinResultadosBusqueda}>
                  No se encontraron productos.
                </p>
              )}
            </div>
          )}
        </div>
      )}

      {/* fondo del carrito*/}
      <div
        className={`${styles.overlayCarrito} ${carritoAbierto ? styles.overlayActivo : ""}`}
        onClick={() => setCarritoAbierto(false)}
        aria-hidden="true"
      />

      {/* Panel lateral del carrito */}
      <aside
        className={`${styles.panelCarrito} ${
          carritoAbierto ? styles.panelAbierto : ""
        }`}
        role="dialog"
        aria-modal={carritoAbierto ? "true" : undefined}
        aria-label="Mi carrito"
        aria-hidden={!carritoAbierto}
        inert={!carritoAbierto}
      >
        <div className={styles.cabeceraCarrito}>
          <div className={styles.tituloCabeceraCarrito}>
            <h2 className={styles.tituloCarrito}>Mi carrito</h2>

            <span className={styles.subtituloCarrito}>
              {totalItemsCarrito}{" "}
              {totalItemsCarrito === 1 ? "unidad" : "unidades"}
            </span>
          </div>

          <button
            type="button"
            className={styles.botonCerrarCarrito}
            onClick={() => setCarritoAbierto(false)}
            aria-label="Cerrar carrito"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Productos desplazables */}
        <div className={styles.listaProductosCarrito}>
          {carrito.length === 0 ? (
            <div className={styles.carritoVacio}>
              <svg
                className={styles.iconoCarritoVacio}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.3"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 3h2l2.4 11.2a2 2 0 002 1.6h8.8a2 2 0 002-1.6L22 7H6"
                />
                <circle cx="10" cy="20" r="1" />
                <circle cx="18" cy="20" r="1" />
              </svg>

              <p className={styles.textoCarritoVacio}>Tu carrito está vacío</p>

              <button
                type="button"
                className={styles.enlaceVolverTienda}
                onClick={() => setCarritoAbierto(false)}
              >
                Volver a la tienda
              </button>
            </div>
          ) : (
            carrito.map((producto) => (
              <article
                key={`${producto.id}-${producto.talleElegido}`}
                className={styles.itemPanelCarrito}
              >
                <img
                  src={producto.imagen}
                  alt={producto.nombre}
                  className={styles.imgCarrito}
                />

                <div className={styles.detalleCarrito}>
                  <h3 className={styles.nombreProductoCarrito}>
                    {producto.nombre}
                  </h3>

                  <p className={styles.talleCarrito}>
                    Talle: {producto.talleElegido}
                  </p>

                  <p className={styles.precioUnitarioCarrito}>
                    ${formatoPrecio(producto.precio)} c/u
                  </p>

                  <div
                    className={styles.controlesCantidad}
                    aria-label={`Cantidad de ${producto.nombre}`}
                  >
                    <button
                      type="button"
                      className={styles.botonCantidad}
                      onClick={() => disminuirCantidad(producto)}
                      disabled={producto.cantidad <= 1}
                      aria-label={`Disminuir cantidad de ${producto.nombre}`}
                    >
                      −
                    </button>

                    <span className={styles.numeroCantidad}>
                      {producto.cantidad}
                    </span>

                    <button
                      type="button"
                      className={styles.botonCantidad}
                      onClick={() => aumentarCantidad(producto)}
                      disabled={producto.cantidad >= producto.stockDisponible}
                      aria-label={`Aumentar cantidad de ${producto.nombre}`}
                    >
                      +
                    </button>
                  </div>

                  <p className={styles.subtotalProductoCarrito}>
                    Subtotal: $
                    {formatoPrecio(producto.precio * producto.cantidad)}
                  </p>

                  <button
                    type="button"
                    className={styles.btnEliminarDelCarro}
                    onClick={() => quitarDelCarrito(producto)}
                  >
                    Quitar
                  </button>
                </div>
              </article>
            ))
          )}
        </div>

        {/* Total y acceso a la compra */}
        {carrito.length > 0 && (
          <div className={styles.pieCarrito}>
            <div className={styles.totalCarrito}>
              <span>Total</span>

              <strong>${formatoPrecio(costoTotalCarrito)}</strong>
            </div>

            <Link
              to="/compra"
              className={styles.btnIniciarCompra}
              onClick={() => setCarritoAbierto(false)}
            >
              Iniciar compra
            </Link>

            <p className={styles.textoFinalCarrito}>
              Los detalles de tu pedido se revisan al continuar.
            </p>
          </div>
        )}
      </aside>
    </header>
  );
}
