import { createContext, useContext, useState } from "react";

const CarritoContext = createContext();

export function CarritoProvider ({children}) {
    const [carrito, setCarrito] = useState([]);
    const agregarAlCarrito = (item, cantidad, talle) => {
        item.talleElegido = talle;
        setCarrito(carrito => {
            let repetido = false;
            const nuevoCarrito = carrito.map(producto => {
                if (producto.id === item.id && producto.talleElegido === item.talleElegido) {
                    repetido = true;
                    return {...producto, cantidad: (producto.cantidad || 1) + cantidad};
                }
                return producto;
            });
            if (!repetido) {
                return [...carrito, {...item, cantidad: cantidad || 1}];
            }
            return nuevoCarrito;
        }); 
        console.log("Producto:", item.id, "Cantidad:", cantidad, "Talle:", talle)
    };

    const quitarDelCarrito = (item) => {
        setCarrito(carrito =>{
            const carritoActualizado = carrito.filter(producto => producto.id !== item.id);
            return carritoActualizado;
        })
    }
    
    return (
        <CarritoContext.Provider value = {{carrito, agregarAlCarrito, quitarDelCarrito}}>
            {children}
        </CarritoContext.Provider>
    )
}

export function useCarrito() {
    return useContext(CarritoContext);
}

