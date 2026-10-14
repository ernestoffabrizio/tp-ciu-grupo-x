const productos = [
  {
    id: 1,
    nombre: "Zapato de cuero",
    categoria: "Zapatos",
    precio: 205990,
    imagen: "../../media/zapato1.jpg",
    imagenes: [
      "../../media/zapato1.jpg",
      "../../media/zapato1-1.jpg",
      "../../media/zapato1-2.jpg",
    ],
    descripcion: "Zapato de vestir con empeine liso. Horma redonda. Suela a juego con tacón bajo.",
    stock: 14,
    talles: [
      { numero: 38, stock: 2 },
      { numero: 39, stock: 4 },
      { numero: 40, stock: 7 },
      { numero: 41, stock: 0 },
      { numero: 42, stock: 1 },
    ]
  },
  {
    id: 2,
    nombre: "Zapato de cuero ribete",
    categoria: "Zapatos",
    precio: 165990,
    imagen: "../../media/zapato2.jpg",
    imagenes: [
      "../../media/zapato2.jpg",
      "../../media/zapato2-1.jpg",
      "../../media/zapato2-2.jpg",
    ],
    descripcion: "Zapato con cordones. Empeine liso con detalle de ribete. Horma redonda. Suela dentada.",
    stock: 8,
    talles: [
      { numero: 38, stock: 0 },
      { numero: 39, stock: 5 },
      { numero: 40, stock: 2 },
      { numero: 41, stock: 0 },
      { numero: 42, stock: 1 },
    ]
  },
  {
    id: 3,
    nombre: "Zapato con suela dentada",
    categoria: "Zapatos",
    precio: 189990,
    imagen: "../../media/zapato3.jpg",
    imagenes: [
      "../../media/zapato3.jpg",
      "../../media/zapato3-1.jpg",
      "../../media/zapato3-2.jpg",
    ],
    descripcion: "Zapato con cierre de doble hebilla. Suela con tacón bajo.",
    stock: 28,
    talles: [
      { numero: 38, stock: 2 },
      { numero: 39, stock: 8 },
      { numero: 40, stock: 3 },
      { numero: 41, stock: 4 },
      { numero: 42, stock: 11 },
    ]
  },
  {
    id: 4,
    nombre: "Bota Chelsea de cuero",
    categoria: "Botas",
    precio: 245990,
    imagen: "../../media/zapato4.jpg",
    imagenes: [
      "../../media/zapato4.jpg",
      "../../media/zapato4-1.jpg",
      "../../media/zapato4-2.jpg",
    ],
    descripcion: "Bota estilo chelsea. Elásticos laterales para facilitar el calce. Horma redonda.",
    stock: 36,
    talles: [
      { numero: 38, stock: 2 },
      { numero: 39, stock: 4 },
      { numero: 40, stock: 12 },
      { numero: 41, stock: 3 },
      { numero: 42, stock: 15 },
    ]
  },
  {
    id: 5,
    nombre: "Zapato clásico con ribete",
    categoria: "Zapatos",
    precio: 165990,
    imagen: "../../media/zapato5.jpg",
    imagenes: [
      "../../media/zapato5.jpg",
      "../../media/zapato5-1.jpg",
      "../../media/zapato5-2.jpg",
    ],
    descripcion: "Zapato de cordones. Parte superior lisa con detalle de ribete en el empeine. Horma redonda.",
    stock: 15,
    talles: [
      { numero: 38, stock: 8 },
      { numero: 39, stock: 3 },
      { numero: 40, stock: 3 },
      { numero: 41, stock: 0 },
      { numero: 42, stock: 1 },
    ]
  },
  {
    id: 6,
    nombre: "Bota con arnés",
    categoria: "Botas",
    precio: 205990,
    imagen: "../../media/zapato6.jpg",
    imagenes: [
      "../../media/zapato6.jpg",
      "../../media/zapato6-1.jpg",
      "../../media/zapato6-2.jpg",
    ],
    descripcion: "Bota de media caña. Detalle de arnés y hebilla lateral. Horma en punta. Suela a juego con tacón bajo.",
    stock: 27,
    talles: [
      { numero: 38, stock: 8 },
      { numero: 39, stock: 10 },
      { numero: 40, stock: 3 },
      { numero: 41, stock: 5 },
      { numero: 42, stock: 1 },
    ]
  },
  {
    id: 7,
    nombre: "Bota de cuero con cordones",
    categoria: "Botas",
    precio: 369990,
    imagen: "../../media/zapato7.jpg",
    imagenes: [
      "../../media/zapato7.jpg",
      "../../media/zapato7-1.jpg",
      "../../media/zapato7-2.jpg",
    ],
    descripcion: "Bota con cordones confeccionadas en piel granulada. Horma cuadrada. Detalle de cordones a color contrastante.",
    stock: 22,
    talles: [
      { numero: 38, stock: 2 },
      { numero: 39, stock: 1 },
      { numero: 40, stock: 9 },
      { numero: 41, stock: 7 },
      { numero: 42, stock: 3 },
    ]
  },
  {
    id: 8,
    nombre: "Mocasín desgastado",
    categoria: "Mocasines",
    precio: 189990,
    imagen: "../../media/zapato8.jpg",
    imagenes: [
      "../../media/zapato8.jpg",
      "../../media/zapato8-1.jpg",
      "../../media/zapato8-2.jpg",
    ],
    descripcion: "Mocasín de vestir. Parte superior con efecto desgastado y detalle de moneda en la tira. Horma redonda.",
    stock: 20,
    talles: [
      { numero: 38, stock: 1 },
      { numero: 39, stock: 4 },
      { numero: 40, stock: 2 },
      { numero: 41, stock: 5 },
      { numero: 42, stock: 8 },
    ]
  },
  {
    id: 9,
    nombre: "Mocasín de cuero",
    categoria: "Mocasines",
    precio: 289990,
    imagen: "../../media/zapato9.jpg",
    imagenes: [
      "../../media/zapato9.jpg",
      "../../media/zapato9-1.jpg",
      "../../media/zapato9-2.jpg",
    ],
    descripcion: "Mocasín casual. Detalle de hebilla en el empeine. Horma redonda. Suela ultrafina.",
    stock: 16,
    talles: [
      { numero: 38, stock: 3 },
      { numero: 39, stock: 4 },
      { numero: 40, stock: 3 },
      { numero: 41, stock: 5 },
      { numero: 42, stock: 1 },
    ]
  },
  {
    id: 10,
    nombre: "Bota con cordones (Agotada)",
    categoria: "Botas",
    precio: 155990,
    imagen: "../../media/zapato10.jpg",
    imagenes: [
      "../../media/zapato10.jpg",
      "../../media/zapato10-1.jpg",
      "../../media/zapato10-2.jpg",
    ],
    descripcion: "Bota con cordones. Parte superior lisa. Horma redonda. Suela gruesa.",
    stock: 0, // <-- Sin stock para evaluar el deshabilitado y etiqueta
    talles: [
      { numero: 38, stock: 0 },
      { numero: 39, stock: 0 },
      { numero: 40, stock: 0 },
      { numero: 41, stock: 0 },
      { numero: 42, stock: 0 },
    ]
  },
  {
    id: 11,
    nombre: "Zueco de piel anatómico",
    categoria: "Zuecos",
    precio: 205990,
    imagen: "../../media/zapato11.jpg",
    imagenes: [
      "../../media/zapato11.jpg",
      "../../media/zapato11-1.jpg",
      "../../media/zapato11-2.jpg",
    ],
    descripcion: "Zueco fabricado con piel. Plantilla anatómica. Horma redonda. Suela con volumen.",
    stock: 8,
    talles: [
      { numero: 38, stock: 2 },
      { numero: 39, stock: 4 },
      { numero: 40, stock: 2 },
      { numero: 41, stock: 0 },
      { numero: 42, stock: 0 },
    ]
  },
  {
    id: 12,
    nombre: "Zueco de piel con cinta",
    categoria: "Zuecos",
    precio: 205990,
    imagen: "../../media/zapato12.jpg",
    imagenes: [
      "../../media/zapato12.jpg",
      "../../media/zapato12-1.jpg",
      "../../media/zapato12-2.jpg",
    ],
    descripcion: "Zueco fabricado con piel. Detalle de cinta en el empeine. Plantilla acolchada. Horma redonda. Suela con volumen.",
    stock: 13,
    talles: [
      { numero: 38, stock: 3 },
      { numero: 39, stock: 2 },
      { numero: 40, stock: 3 },
      { numero: 41, stock: 1 },
      { numero: 42, stock: 4 },
    ]
  }
];

export default productos;