const ProductoCard = ({ productoActual }) => {
  return (
    <div>
      <h2>{productoActual.nombre}</h2>
      <p>{productoActual.categoria}</p>
      <p>${productoActual.precio}</p>
      <p>{productoActual.descripcion}</p>
      <p>Stock: {productoActual.stock}</p>
    </div>
  );
};

export default ProductoCard;