import { useState } from "react";
import productos from "../data/productos";
import ProductoCard from "../components/ProductoCard/ProductoCard";

const Productos = ({ agregarAlCarrito }) => {
  const [busqueda, setBusqueda] = useState("");
  const [categoria, setCategoria] = useState("Todas");
  const [orden, setOrden] = useState("default");

  // Obtener categorías únicas dinámicamente
  const categorias = ["Todas", ...new Set(productos.map((p) => p.categoria))];

  // 1. Filtrar por nombre y por categoría
  let productosFiltrados = productos.filter((producto) => {
    const coincideNombre = producto.nombre
      .toLowerCase()
      .includes(busqueda.toLowerCase());
    const coincideCategoria =
      categoria === "Todas" || producto.categoria === categoria;

    return coincideNombre && coincideCategoria;
  });

  // 2. Ordenar por precio (menor a mayor / mayor a menor)
  if (orden === "menor") {
    productosFiltrados.sort((a, b) => a.precio - b.precio);
  } else if (orden === "mayor") {
    productosFiltrados.sort((a, b) => b.precio - a.precio);
  }

  return (
    <div className="container my-4">
      <h1 className="text-center mb-4">Catálogo de Productos</h1>

      {/* Controles de Búsqueda y Filtros */}
      <div className="row g-3 mb-4">
        {/* Buscador por nombre */}
        <div className="col-12 col-md-5">
          <input
            type="text"
            className="form-control"
            placeholder="Buscar por nombre..."
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
          />
        </div>

        {/* Filtro por categoría */}
        <div className="col-6 col-md-4">
          <select
            className="form-select"
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
          >
            {categorias.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        {/* Ordenamiento por precio */}
        <div className="col-6 col-md-3">
          <select
            className="form-select"
            value={orden}
            onChange={(e) => setOrden(e.target.value)}
          >
            <option value="default">Ordenar por...</option>
            <option value="menor">Precio: Menor a Mayor</option>
            <option value="mayor">Precio: Mayor a Menor</option>
          </select>
        </div>
      </div>

      {/* Grilla de productos renderizados */}
      <div className="row g-4">
        {productosFiltrados.length > 0 ? (
          productosFiltrados.map((producto) => (
            <div key={producto.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
              <ProductoCard
                productoActual={producto}
                agregarAlCarrito={agregarAlCarrito}
              />
            </div>
          ))
        ) : (
          <div className="col-12 text-center py-5">
            <p className="text-muted fs-5">
              No se encontraron productos que coincidan con la búsqueda.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Productos;