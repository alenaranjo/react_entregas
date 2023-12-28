const productos = [
  { id: 1, name: 'Camiseta', categoria: 'ropa', precio: 10.99, stock: 25, descripcion: 'Camiseta cómoda de manga corta.', imageURL: 'https://img.freepik.com/fotos-premium/crea-impresiones-memorables-maqueta-premium-camiseta_905683-28777.jpg?' },
  { id: 2, name: 'Zapatos', categoria: 'zapatos', precio: 15.99, stock: 20, descripcion: 'Elegantes zapatos para cualquier ocasión.', imageURL: 'https://img.freepik.com/foto-gratis/tacones-terciopelo-negro_53876-102771.jpg?' },
  { id: 3, name: 'Jacket', categoria: 'ropa', precio: 12.49, stock: 30, descripcion: 'Chaqueta moderna y versátil.', imageURL: 'https://img.freepik.com/fotos-premium/maniqui-transparente-chaqueta-bombardero-aislada-sobre-fondo-blanco_373676-1755.jpg?' },
  { id: 4, name: 'Gorra', categoria: 'ropa', precio: 19.99, stock: 15, descripcion: 'Gorra de estilo urbano.', imageURL: 'https://img.freepik.com/fotos-premium/gorra-beisbol-roja-negra-aislada-sobre-fondo-blanco_158023-1492.jpg?' },
  { id: 5, name: 'Hoddie', categoria: 'ropa', precio: 28.99, stock: 40, descripcion: 'Sudadera con capucha para días fríos.', imageURL: 'https://img.freepik.com/fotos-premium/sudadera-capucha-roja-blanco-sobre-mesa-fotografiada-arriba_786887-169.jpg?' },
  { id: 6, name: 'Pantalones', categoria: 'ropa', precio: 22.99, stock: 18, descripcion: 'Pantalones cargo cómodos y modernos.', imageURL: 'https://img.freepik.com/psd-premium/pantalones-cargo-caqui-hombre-png_705838-2568.jpg?' },
  { id: 7, name: 'SmartWatch', categoria: 'tecnologia', precio: 49.99, stock: 12, descripcion: 'Reloj inteligente con tecnología de vanguardia.', imageURL: 'https://img.freepik.com/psd-gratis/icono-reloj-inteligente-digital-ilustracion-procesamiento-3d-aislado_47987-8203.jpg?' },
  { id: 8, name: 'Lentes de sol', categoria: 'accesorios', precio: 14.99, stock: 25, descripcion: 'Gafas de sol elegantes y modernas.', imageURL: 'https://img.freepik.com/fotos-premium/hermosas-gafas-sol-lujo-aisladas-sobre-fondo-blanco_236836-24296.jpg?' },
  { id: 9, name: 'Bolso', categoria: 'bolsos', precio: 32.99, stock: 22, descripcion: 'Mochila espaciosa y perfecta para el día a día.', imageURL: 'https://img.freepik.com/fotos-premium/mochila-utiles-escolares-concepto-regreso-escuela-mochila-cohete-libros-papeleria_926199-182573.jpg?'},
  { id: 10, name: 'Bufanda', categoria: 'accesorios', precio: 8.49, stock: 35, descripcion: 'Bufanda roja para mantenerte abrigado.', imageURL: 'https://img.freepik.com/foto-gratis/bufanda-roja-invierno-aislada-sobre-fondo-blanco_1101-2407.jpg?' },
  { id: 11, name: 'Botas', categoria: 'zapatos', precio: 45.99, stock: 17, descripcion: 'Botas de cuero resistentes para aventuras al aire libre.', imageURL: 'https://img.freepik.com/fotos-premium/nuevas-botas-cuero-marron-mujer-impermeables-senderismo-invierno-otono-sobre-fondo-amarillo-calzado-moda-invierno-compras-linea-tienda-moda-zapatos-hogar_116407-14380.jpg?' },
  { id: 12, name: 'Pulsera', categoria: 'accesorios', precio: 5.99, stock: 50, descripcion: 'Pulsera azul elegante para cualquier ocasión.', imageURL: 'https://img.freepik.com/foto-gratis/belleza-moda-preciosa-pulsera-azul_144627-48287.jpg?w=996&t=st=1699974259~exp=1699974859~hmac=368f455b24f71cc8e067a9337fa3cb836d64893f8383c992f8bb2b41e84b5295' },
  { id: 13, name: 'Paraguas', categoria: 'accesorios', precio: 18.99, tock: 50, descripcion: 'Paraguas rosa para días lluviosos.', imageURL: 'https://img.freepik.com/fotos-premium/paraguas-rosa-aislado-blanco_30478-60.jpg?' },
  { id: 14, name: 'Cellphone', categoria: 'tecnologia', precio: 14.99, stock: 22, descripcion: 'Teléfono móvil con características avanzadas.', imageURL: 'https://img.freepik.com/foto-gratis/composicion-creativa-carretes_23-2149711507.jpg?w=996&t=st=1699974672~exp=1699975272~hmac=fba0436137043150576036c721241694e348cba99dc61d2f19b8abb54608711e' },
  { id: 15, name: 'Cartera', categoria: 'bolsos', precio: 29.99, stock: 30, descripcion: 'Bolso rosa con candado dorado.', imageURL: 'https://img.freepik.com/fotos-premium/hay-bolso-rosa-candado-oro_958165-58967.jpg?w=740' },
];
  
  export const mFetch = (id) =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(productos);
      }, 500);
    });