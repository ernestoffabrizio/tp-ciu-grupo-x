const formatoPrecio = (precio) =>
  Number(precio).toLocaleString("es-AR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
});

export default formatoPrecio;