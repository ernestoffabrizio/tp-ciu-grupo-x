import { useEffect, useState } from "react";
import { Alert, Button, Modal } from "react-bootstrap";
import { useCarrito } from "../../context/CarritoContext";

const formatoPrecio = (precio) =>
  precio.toLocaleString("es-AR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

function CompraRapidaModal({ show, onHide, producto }) {
  const [talleSeleccionado, setTalleSeleccionado] = useState(null);
  const [mensaje, setMensaje] = useState("");
  const [tipoMensaje, setTipoMensaje] = useState("success");
  const [cantidad, setCantidad] = useState(1);

  const { agregarAlCarrito } = useCarrito();

  useEffect(() => {
    if (show) {
      setTalleSeleccionado(null);
      setCantidad(1);
      setMensaje("");
    }
  }, [show, producto?.id]);

  if (!producto) return null;

  const talles = producto.talles ?? [];
  const tallesDisponibles = talles.filter((talle) => talle.stock > 0);

  const precio = Number(producto.precio);

  const manejarAgregar = () => {
    if (talleSeleccionado === null) {
      setTipoMensaje("danger");
      setMensaje("Seleccioná un talle antes de continuar.");
      return;
    }

    const agregado = agregarAlCarrito(producto, cantidad, talleSeleccionado);

    if (!agregado) {
      setTipoMensaje("warning");
      setMensaje(
        "No se pudo agregar. Revisá el stock disponible de ese talle.",
      );
      return;
    }

    setTipoMensaje("success");
    setMensaje(
      `¡${producto.nombre} talle ${talleSeleccionado} agregado al carrito!`,
    );
  };

  return (
    <Modal
      show={show}
      onHide={onHide}
      centered
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header>
        <Modal.Title>Agregar al carrito</Modal.Title>

        <button
          type="button"
          className="btn-close"
          aria-label="Cerrar"
          onClick={onHide}
        />
      </Modal.Header>

      <Modal.Body>
        <div className="d-flex flex-column flex-sm-row gap-3">
          <img
            src={producto.imagen}
            alt={producto.nombre}
            className="img-fluid rounded"
            style={{
              width: "100%",
              maxWidth: "180px",
              height: "180px",
              objectFit: "cover",
            }}
          />

          <div className="flex-grow-1">
            <h5>{producto.nombre}</h5>

            <p className="fw-bold">${formatoPrecio(precio)}</p>

            <p className="mb-2">Elegí un talle:</p>

            <div className="d-flex flex-wrap gap-2">
              {talles.map((talle) => (
                <Button
                  key={talle.numero}
                  type="button"
                  size="sm"
                  variant={
                    Number(talleSeleccionado) === Number(talle.numero)
                      ? "dark"
                      : "outline-dark"
                  }
                  disabled={talle.stock <= 0}
                  onClick={() => {
                    setTalleSeleccionado(Number(talle.numero));
                    setCantidad(1);
                    setMensaje("");
                  }}
                  aria-pressed={
                    Number(talleSeleccionado) === Number(talle.numero)
                  }
                >
                  {talle.numero}
                </Button>
              ))}
            </div>

            {talleSeleccionado !== null && (
              <p className="mt-2">
                Stock disponible:{" "}
                {talles.find(
                  (t) => Number(t.numero) === Number(talleSeleccionado),
                )?.stock ?? 0}
              </p>
            )}

            {talleSeleccionado !== null && (
              <div className="mt-3">
                <label htmlFor="cantidad-pares" className="form-label">
                  Cantidad de pares:
                </label>

                <input
                  id="cantidad-pares"
                  type="number"
                  className="form-control"
                  min="1"
                  max={
                    talles.find(
                      (t) => Number(t.numero) === Number(talleSeleccionado),
                    )?.stock ?? 1
                  }
                  value={cantidad}
                  onChange={(e) => {
                    const valor = Number(e.target.value);
                    const stockDisponible =
                      talles.find(
                        (t) => Number(t.numero) === Number(talleSeleccionado),
                      )?.stock ?? 1;

                    if (valor >= 1 && valor <= stockDisponible) {
                      setCantidad(valor);
                    }
                  }}
                />
              </div>
            )}

            {tallesDisponibles.length === 0 && (
              <p className="text-danger mt-2">
                Este producto está agotado en todos los talles.
              </p>
            )}
          </div>
        </div>

        {mensaje && (
          <Alert variant={tipoMensaje} className="mt-3 mb-0">
            {mensaje}
          </Alert>
        )}
      </Modal.Body>

      <Modal.Footer>
        <Button variant="outline-secondary" onClick={onHide}>
          Cancelar
        </Button>

        <Button
          variant="dark"
          onClick={manejarAgregar}
          disabled={
            talleSeleccionado === null || tallesDisponibles.length === 0
          }
        >
          Agregar al carrito
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default CompraRapidaModal;
