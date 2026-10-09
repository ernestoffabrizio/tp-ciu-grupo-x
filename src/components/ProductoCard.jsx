const ProductoCard = ({ productoActual }) => {
  return (
    <div>
      <img
        src={productoActual.imagen}
        alt={`Imagen de ${productoActual.nombre}`}
        title={productoActual.nombre}
      />

      <h2>{productoActual.nombre}</h2>
      <p>{productoActual.categoria}</p>
      <p>
        ${productoActual.precio.toLocaleString("es-AR", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2
        })}
      </p>
      <p>{productoActual.descripcion}</p>
      <p>Stock: {productoActual.stock}</p>
    </div>
  );
};

export default ProductoCard;
