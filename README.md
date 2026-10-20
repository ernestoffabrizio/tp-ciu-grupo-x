# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.



## Request


1 - Estructura y Enrutamiento (React Router):

.Crear una aplicación SPA con React Router.
.Contar con una vista principal de catálogo (/productos o /) y una vista de detalle por producto (/productos/:id o /producto/:id).
.Manejar una página de error o ruta 404 para URLs inexistentes.

2 - Visualización de Productos:

.Mostrar un listado de productos a partir de un arreglo de objetos en JavaScript.
.Renderizar componentes reutilizables tipo tarjeta con imagen, título y precio.
.Brindar un botón o enlace para acceder al detalle de cada producto.

3 - Búsqueda y Filtros interactivos:

.Implementar un buscador por texto que filtre los productos por nombre en tiempo real.
.Implementar al menos un criterio adicional de filtrado o clasificación (por ejemplo, filtro por categoría u ordenamiento por precio).
.Gestionar estos filtros mediante el estado de React (useState).

4 - Validación de Stock y Disponibilidad:

.Indicar claramente si un producto tiene o no disponibilidad.
.Si no hay stock disponible, el botón de compra o agregado debe estar deshabilitado (disabled) con la leyenda correspondiente ("Sin stock").

5 - Carrito de Compras:

.Permitir agregar productos al carrito.
.Disponer de una vista o sección donde se listen los elementos añadidos, cantidades, precios individuales y el cálculo del total de la compra.
.Permitir modificar cantidades o quitar productos.