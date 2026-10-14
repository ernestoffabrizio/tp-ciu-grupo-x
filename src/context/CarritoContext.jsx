import { createContext, useContext, useState } from "react";

const CarritoContext = createContext();

export function CarritoProvider ({children}) {
    const [carrito, setCarrito] = useState([]);

    const agregarAlCarrito = (item, cantidad, talle) => {
        setCarrito(carrito => {
            const repetido = carrito.find(producto => producto.id === item.id)

            if(repetido) {
                return carrito.map( (producto) => 
                       producto.id === item.id ?
                       { ...producto, cantidad: (producto.cantidad || 1) + cantidad }
                       : producto
                );
            }else {
                return [...carrito, {...item, cantidad: 1}];
            }
            
            
        }); 
        console.log("Producto:", item.id, "Cantidad:", cantidad, "Talle:", talle)
    };
    
    return (
        <CarritoContext.Provider value = {{carrito, agregarAlCarrito}}>
            {children}
        </CarritoContext.Provider>
    )
}

export function useCarrito() {
    return useContext(CarritoContext);
}

