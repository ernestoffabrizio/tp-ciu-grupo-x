import { createContext, useContext, useState } from "react";

const CarritoContext = createContext();

export function CarritoProvider({ children }) {
  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (item, cantidad = 1, talle) => {
    const talleElegido = talle ?? item.talleElegido;
    const talleDisponible = item.talles?.find(
      (talle) => talle.numero === Number(talleElegido),
    );

    if (!talleDisponible || talleDisponible.stock <= 0) {
      return false;
    }

    const productoNuevo = {
      ...item,
      talleElegido: Number(talleElegido),
      stockDisponible: talleDisponible.stock,
    };

    let agregado = true;

    setCarrito((actual) => {
      const existente = actual.find(
        (producto) =>
          producto.id === productoNuevo.id &&
          producto.talleElegido === productoNuevo.talleElegido,
      );

      const cantidadActual = existente?.cantidad ?? 0;
      const cantidadSolicitada = Math.max(1, Number(cantidad) || 1);

      if (cantidadActual + cantidadSolicitada > talleDisponible.stock) {
        agregado = false;
        return actual;
      }

      if (existente) {
        return actual.map((producto) =>
          producto.id === productoNuevo.id &&
          producto.talleElegido === productoNuevo.talleElegido
            ? { ...producto, cantidad: cantidadActual + cantidadSolicitada }
            : producto,
        );
      }

      return [...actual, { ...productoNuevo, cantidad: cantidadSolicitada }];
    });

    return agregado;
  };

  const aumentarCantidad = (item) => {
    setCarrito((actual) =>
      actual.map((producto) =>
        producto.id === item.id && producto.talleElegido === item.talleElegido
          ? {
              ...producto,
              cantidad: Math.min(
                producto.cantidad + 1,
                producto.stockDisponible,
              ),
            }
          : producto,
      ),
    );
  };

  const disminuirCantidad = (item) => {
    setCarrito((actual) =>
      actual.map((producto) =>
        producto.id === item.id && producto.talleElegido === item.talleElegido
          ? { ...producto, cantidad: Math.max(1, producto.cantidad - 1) }
          : producto,
      ),
    );
  };

  const quitarDelCarrito = (item) => {
    setCarrito((actual) =>
      actual.filter(
        (producto) =>
          !(
            producto.id === item.id &&
            producto.talleElegido === item.talleElegido
          ),
      ),
    );
  };

  const vaciarCarrito = () => setCarrito([]);

  return (
    <CarritoContext.Provider
      value={{
        carrito,
        agregarAlCarrito,
        aumentarCantidad,
        disminuirCantidad,
        quitarDelCarrito,
        vaciarCarrito,
      }}
    >
      {children}
    </CarritoContext.Provider>
  );
}

export function useCarrito() {
  return useContext(CarritoContext);
}