import { useState, useEffect, useRef } from 'react';
import styles from './Header.module.css'; 
import { Link } from "react-router";

export default function Header() {
  const [menuActivo, setMenuActivo] = useState(null);
  const [mostrarBuscador, setMostrarBuscador] = useState(false);
  const [menuMovilAbierto, setMenuMovilAbierto] = useState(false);
  const [cantidadCarrito, setCantidadCarrito] = useState(0); 
  const [carritoAbierto, setCarritoAbierto] = useState(false);
  
  const referenciaNavegacion = useRef(null);
  
  const alternarDesplegable = (nombreMenu) => {
    setMenuActivo((menuPrevio) => (menuPrevio === nombreMenu ? null : nombreMenu));
  };

  useEffect(() => {
    function manejarClicFuera(evento) {
      if (referenciaNavegacion.current && !referenciaNavegacion.current.contains(evento.target)) {
        setMenuActivo(null);
        setMostrarBuscador(false);
        setMenuMovilAbierto(false);
      }
    }

    document.addEventListener('mousedown', manejarClicFuera);
    return () => {
      document.removeEventListener('mousedown', manejarClicFuera);
    };
  }, []);

  return (
    <header className={styles.encabezadoNavegacion} ref={referenciaNavegacion}>
      <div className={styles.franjaSuperior}></div>

      <div className={styles.barraContenido}>
        
        {/* inicio y productos despegable */}
        <nav className={`${styles.columnaNavegacion} ${styles.columnaIzquierda}`} aria-label="Menú principal">
          <button 
            className={styles.botonHamburguesa} 
            onClick={() => setMenuMovilAbierto(!menuMovilAbierto)}
            aria-label="Abrir menú"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          <div className={`${styles.enlacesPrincipales} ${menuMovilAbierto ? styles.abierto : ''}`}>
            {/* Cambiado <a> por <Link> y href por to */}
            <Link to="/" className={styles.enlaceNavegacion} onClick={() => setMenuMovilAbierto(false)}>INICIO</Link>

            <div className={styles.contenedorDesplegable}>
              <button
                type="button"
                className={styles.botonDesplegable}
                onClick={() => alternarDesplegable('productos')}
                aria-expanded={menuActivo === 'productos'}
              >
                PRODUCTOS
                <svg className={`${styles.iconoFlecha} ${menuActivo === 'productos' ? styles.iconoFlechaAbierta : ''}`} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {menuActivo === 'productos' && (
                <div className={styles.cajaSubopciones}>
                  <Link to="/novedades" className={styles.enlaceSubopcion} onClick={() => setMenuActivo(null)}>Novedades</Link>
                  <Link to="/ofertas" className={styles.enlaceSubopcion} onClick={() => setMenuActivo(null)}>Ofertas</Link>
                </div>
              )}
            </div>
          </div>
        </nav>

        {/* logo/nombre del medio de la página */}
        <div className={`${styles.columnaNavegacion} ${styles.columnaCentro}`}>
          <Link to="/" className={styles.enlaceLogotipo} aria-label="Ir al inicio de -ejemplo-">
            <div className={styles.logotipoTexto}>
              <svg className={styles.flechaDecorativaLogo} viewBox="0 0 70 8">
                <path d="M0 4 L5 1 L4 4 L5 7 Z" fill="#000" />
                <line x1="4" y1="4" x2="68" y2="4" stroke="#000" strokeWidth="1.2" />
                <polygon points="68,2 72,4 68,6" fill="#000" />
              </svg>
              <span>cammelcase</span>
            </div>
          </Link>
        </div>

        {/* contacto, lupita y carrito */}
        <div className={`${styles.columnaNavegacion} ${styles.columnaDerecha}`}>
          
          <Link to="/contacto" className={`${styles.enlaceNavegacion} ${styles.enlaceContacto}`}>CONTACTO</Link>
          <button
            type="button"
            className={styles.botonIconoAccion}
            onClick={() => setMostrarBuscador(!mostrarBuscador)}
            aria-label="Abrir buscador"
          >
            <svg className={styles.iconoSvg} fill="none" stroke="currentColor" strokeWidth="2.4" viewBox="0 0 24 24">
              <circle cx="11" cy="11" r="7" />
              <path strokeLinecap="round" d="M21 21l-4.35-4.35" />
            </svg>
          </button>
          
          {/* botón del carrito */}
          <button 
            type="button" 
            className={styles.botonAbrirCarrito} 
            onClick={() => setCarritoAbierto(true)}
            aria-label="Ver carrito"
          >
            <svg className={styles.iconoSvg} fill="currentColor" viewBox="0 0 24 24">
              <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
            </svg>
            <span className={styles.contadorCarrito}>{cantidadCarrito}</span>
          </button>
            
        </div>

      </div>

      {mostrarBuscador && (
        <div className={styles.barraBusquedaFlotante}>
          <input
            type="text"
            className={styles.campoBusqueda}
            placeholder="Buscar productos..."
            autoFocus
          />
        </div>
      )}

      {/* panel del carrito*/}
      <div 
        className={`${styles.overlayCarrito} ${carritoAbierto ? styles.overlayActivo : ''}`} 
        onClick={() => setCarritoAbierto(false)}
      ></div>
      <div className={`${styles.panelCarrito} ${carritoAbierto ? styles.panelAbierto : ''}`}>
        <div className={styles.cabeceraCarrito}>
          <button className={styles.botonCerrarCarrito} onClick={() => setCarritoAbierto(false)}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <h2 className={styles.tituloCarrito}>Mi carrito</h2>
        </div>

        {/* contenido cuando el carrito esta vacio*/}
        <div className={styles.contenidoCarrito}>
          <p className={styles.textoCarritoVacio}>El carrito de compras está vacío</p>
          <button className={styles.enlaceVolverTienda} onClick={() => setCarritoAbierto(false)}>
            Volver a la tienda
          </button>
        </div>

      </div>

    </header>
  );
}