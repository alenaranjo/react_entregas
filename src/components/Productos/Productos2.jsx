import React from 'react';

const Productos2 = () => {
  const productos = [
    { id: 1, producto: 'Producto 1', categoria: 'Categoría 1', precio: 10.99, stock: 25, descripcion: 'Descripción del Producto 1', imagen: 'imagen1.jpg' },
    { id: 2, producto: 'Producto 2', categoria: 'Categoría 2', precio: 15.99, stock: 20, descripcion: 'Descripción del Producto 2', imagen: 'imagen2.jpg' },
    { id: 3, producto: 'Producto 3', categoria: 'Categoría 1', precio: 12.49, stock: 30, descripcion: 'Descripción del Producto 3', imagen: 'imagen3.jpg' },
    { id: 4, producto: 'Producto 4', categoria: 'Categoría 3', precio: 19.99, stock: 15, descripcion: 'Descripción del Producto 4', imagen: 'imagen4.jpg' },
    { id: 5, producto: 'Producto 5', categoria: 'Categoría 2', precio: 8.99, stock: 40, descripcion: 'Descripción del Producto 5', imagen: 'imagen5.jpg' },
  ];

  return (
    <div>
      {productos.map((producto) => (
        <div key={producto.id}>
          {/* Aquí puedes renderizar cada producto */}
        </div>
      ))}
    </div>
  );
};

export default Productos;

