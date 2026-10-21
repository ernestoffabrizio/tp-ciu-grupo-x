# cammelcase

## Descripción



## Integrantes del proyecto
- Calzon Fabrizio, Ernesto - 47.313.652
- Lucero, Jimena Mariel - 41.688.483
- Perezlindo, Ezequiel Gustavo - 34.499.941
- Rios, Julieta Carolina - 45.206.363
- Roces, Guido Nicolás - 32.140.509


## Tecnologías utilizadas

- **React:** desarrollo de la interfaz de usuario mediante componentes reutilizables.
- **JavaScript:** lógica e interactividad de la aplicación.
- **React Router:** navegación entre las diferentes páginas.
- **Bootstrap:** diseño responsive y componentes de interfaz.
- **React-Bootstrap:** integración de componentes de Bootstrap con React.
- **CSS Modules:** estilos específicos para los componentes.
- **Vite:** herramienta de desarrollo y ejecución del proyecto.
- **HTML y CSS:** estructura, presentación y diseño de la interfaz.

## Instalación y ejecución

### Requisitos previos

- Tener instalado [Node.js](https://nodejs.org/).
- Tener instalado npm, que se incluye con Node.js.

### Pasos para instalar y ejecutar el proyecto

1. Clonar el repositorio o descargar el proyecto.
2. Abrir una terminal en la carpeta raíz del proyecto.
3. Instalar las dependencias ejecutando:

   ```bash
   npm install
   ```

4. Iniciar el servidor de desarrollo:

   ```bash
   npm run dev
   ```

5. Abrir en el navegador la dirección que muestra la terminal, generalmente `http://localhost:5173/`.

## Funcionalidades principales

### 1. Estructura y navegación

- Aplicación de una sola página (SPA) desarrollada con React.
- Navegación entre el inicio, el catálogo, el detalle de los productos y las páginas informativas.
- Rutas dinámicas para consultar cada producto mediante su identificador.
- Página de error 404 para direcciones inexistentes.

### 2. Visualización de productos

- Catálogo de zapatos de vestir a partir de un arreglo de objetos en JavaScript.
- Tarjetas reutilizables con imágenes, nombres y precios.
- Vista detallada de cada producto con descripción, categoría, imágenes, precio y talles.
- Navegación desde las tarjetas hacia el detalle de cada producto.

### 3. Búsqueda y filtros

- Buscador de productos por texto.
- Acceso al detalle del producto seleccionado desde los resultados de búsqueda.
- Filtros y opciones de clasificación según las funcionalidades implementadas en el catálogo.

### 4. Stock y disponibilidad

- Selección de talles disponibles para cada producto.
- Visualización del stock correspondiente al talle seleccionado.
- Deshabilitación de talles sin stock.
- Validación de cantidades para evitar superar el stock disponible.
- Mensajes informativos cuando no es posible agregar un producto al carrito.

### 5. Carrito de compras

- Incorporación de productos al carrito con el talle y la cantidad seleccionados.
- Actualización de cantidades de los productos agregados.
- Visualización de precios, subtotales y total de la compra.
- Posibilidad de eliminar productos y vaciar el carrito.
- Validación del stock antes de agregar unidades adicionales.

### 6. Compra simulada

- Formulario con campos para los datos del comprador y la entrega.
- Validación de los campos obligatorios y del formato del correo electrónico.
- Selección del método de entrega y de pago.
- Resumen de los productos incluidos en la compra.
- Confirmación de la compra simulada.

### 7. Diseño adaptable

- Interfaz adaptable a distintos tamaños de pantalla.
- Uso de componentes de React Bootstrap y estilos CSS personalizados.
