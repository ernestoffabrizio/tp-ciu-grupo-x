import productos from "../data/productos";
import ProductoCard from "../components/ProductoCard";

const Productos = () => {
  return (
    <div>
      <h1>Productos</h1>

      {productos.map((producto) => {
        return <ProductoCard key={producto.id} productoActual={producto} />;
      })}
    </div>
  );
};

export default Productos;
