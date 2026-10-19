import { useState } from "react";
import { useCarrito } from "../../context/CarritoContext";
import { validate } from "../../utils/validacionesCompra";
import formatoPrecio from "../../utils/formatoPrecio";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";

const datosIniciales = {
  nombre: "",
  email: "",
  telefono: "",
  direccion: "",
  metodoEntrega: "",
  mensaje: "",
};

export default function FormularioCompra() {
  const { carrito, vaciarCarrito } = useCarrito();

  const [formData, setFormData] = useState(datosIniciales);
  const [errors, setErrors] = useState({});
  const [procesando, setProcesando] = useState(false);
  const [compraConfirmada, setCompraConfirmada] = useState(false);

  const total = carrito.reduce(
    (acumulado, producto) => acumulado + producto.precio * producto.cantidad,
    0,
  );

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previo) => ({
      ...previo,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    //no permitir confirmar con el carrito vacío
    if (carrito.length === 0 || procesando || compraConfirmada) {
      return;
    }

    const nuevosErrores = validate(formData);
    setErrors(nuevosErrores);

    if (Object.keys(nuevosErrores).length > 0) {
      return;
    }

    // Simulación del procesamiento de la compra
    setProcesando(true);

    setTimeout(() => {
      vaciarCarrito();
      setProcesando(false);
      setCompraConfirmada(true);
    }, 1500);
  };

  if (compraConfirmada) {
    return (
      <section className="container py-5 text-center">
        <div className="mb-3">
          <span className="text-success">
            <i className="bi bi-check-circle-fill fs-1" aria-hidden="true"></i>
          </span>
        </div>

        <h2>¡Gracias por tu compra!</h2>

        <p>Tu compra en CamelCase se confirmó correctamente.</p>

        <p className="text-secondary">
          Esta demostración no procesa pagos reales.
        </p>
      </section>
    );
  }

  if (carrito.length === 0) {
    return (
      <section className="container py-5 text-center">
        <h2>Tu carrito está vacío</h2>
        <p>Agregá productos al carrito antes de continuar con la compra.</p>
      </section>
    );
  }

  return (
    <section className="container py-4">
      <h2 className="mb-4">Finalizar compra</h2>

      <div className="row g-4">
        {/* Resumen del pedido */}
        <div className="col-12 col-lg-5">
          <div className="border rounded p-3">
            <h3 className="h5 mb-3">Resumen de tu pedido</h3>

            {carrito.map((producto) => (
              <div
                key={`${producto.id}-${producto.talleElegido}`}
                className="d-flex justify-content-between gap-3 border-bottom py-3"
              >
                <div>
                  <p className="mb-1">{producto.nombre}</p>
                  <small className="text-secondary">
                    Talle: {producto.talleElegido} · Cantidad:{" "}
                    {producto.cantidad}
                  </small>
                </div>

                <span className="text-nowrap">
                  ${formatoPrecio(producto.precio * producto.cantidad)}
                </span>
              </div>
            ))}

            <div className="d-flex justify-content-between mt-3">
              <strong>Total</strong>
              <strong>${formatoPrecio(total)}</strong>
            </div>
          </div>
        </div>

        {/* Formulario */}
        <div className="col-12 col-lg-7">
          <form onSubmit={handleSubmit} noValidate>
            <div className="mb-3">
              <label htmlFor="nombre" className="form-label">
                Nombre y apellido *
              </label>

              <input
                type="text"
                id="nombre"
                name="nombre"
                autoComplete="name"
                className={`form-control ${errors.nombre ? "is-invalid" : ""}`}
                value={formData.nombre}
                onChange={handleChange}
                disabled={procesando}
              />

              {errors.nombre && (
                <div className="invalid-feedback">{errors.nombre}</div>
              )}
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email *
              </label>

              <input
                type="email"
                id="email"
                name="email"
                autoComplete="email"
                className={`form-control ${errors.email ? "is-invalid" : ""}`}
                value={formData.email}
                onChange={handleChange}
                disabled={procesando}
              />

              {errors.email && (
                <div className="invalid-feedback">{errors.email}</div>
              )}
            </div>

            <div className="mb-3">
              <label htmlFor="telefono" className="form-label">
                Teléfono *
              </label>

              <input
                type="tel"
                id="telefono"
                name="telefono"
                autoComplete="tel"
                className={`form-control ${
                  errors.telefono ? "is-invalid" : ""
                }`}
                value={formData.telefono}
                onChange={handleChange}
                disabled={procesando}
              />

              {errors.telefono && (
                <div className="invalid-feedback">{errors.telefono}</div>
              )}
            </div>

            <div className="mb-3">
              <label htmlFor="direccion" className="form-label">
                Dirección *
              </label>

              <input
                type="text"
                id="direccion"
                name="direccion"
                autoComplete="street-address"
                className={`form-control ${
                  errors.direccion ? "is-invalid" : ""
                }`}
                value={formData.direccion}
                onChange={handleChange}
                disabled={procesando}
              />

              {errors.direccion && (
                <div className="invalid-feedback">{errors.direccion}</div>
              )}
            </div>

            <div className="mb-3">
              <label htmlFor="metodoEntrega" className="form-label">
                Método de entrega
              </label>

              <select
                id="metodoEntrega"
                name="metodoEntrega"
                className={`form-select ${
                  errors.metodoEntrega ? "is-invalid" : ""
                }`}
                value={formData.metodoEntrega}
                onChange={handleChange}
                disabled={procesando}
              >
                <option value="">Elegí una opción</option>
                <option value="domicilio">Envío a domicilio</option>
                <option value="retiro">Retiro en punto de entrega</option>
              </select>

              {errors.metodoEntrega && (
                <div className="invalid-feedback">{errors.metodoEntrega}</div>
              )}
            </div>

            <div className="mb-3">
              <label htmlFor="mensaje" className="form-label">
                Mensaje o aclaración (opcional)
              </label>

              <textarea
                id="mensaje"
                name="mensaje"
                className="form-control"
                rows="3"
                value={formData.mensaje}
                onChange={handleChange}
                disabled={procesando}
                placeholder="¿Querés agregar alguna aclaración?"
              />
            </div>

            <p className="text-secondary small">* Campos obligatorios</p>

            <Button
              type="submit"
              variant="dark"
              className="w-100"
              disabled={procesando || carrito.length === 0}
            >
              {procesando ? (
                <>
                  <Spinner
                    animation="border"
                    size="sm"
                    className="me-2"
                    aria-hidden="true"
                  />
                  Procesando compra...
                </>
              ) : (
                "Confirmar compra"
              )}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
