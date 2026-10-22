export const validate = (data) => {
  const newErrors = {};

  if (data.nombre.trim() === "") {
    newErrors.nombre = "El nombre y apellido son obligatorios.";
  } else if (data.nombre.trim().length > 100) {
    newErrors.nombre = "El nombre no puede superar los 100 caracteres";
  }

  if (data.email.trim() === "") {
    newErrors.email = "El email es obligatorio.";
  } else if (
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())
  ) {
    newErrors.email = "Ingresá un email válido.";
  }

  if (data.telefono.trim() === "") {
    newErrors.telefono = "El teléfono es obligatorio.";
  } else if (!/^\+?[0-9\s()-]{8,20}$/.test(data.telefono.trim())) {
    newErrors.telefono = "Ingresá un teléfono válido.";
  }

  if (data.direccion.trim() === "") {
    newErrors.direccion = "La dirección es obligatoria.";
  }

  if (data.metodoEntrega === "") {
    newErrors.metodoEntrega = "Por favor, seleccioná un método de entrega.";
  }

  if (data.formaPago === "") {
    newErrors.formaPago = "Por favor, seleccioná una forma de pago.";
  }

  return newErrors;
};
