import React, { memo } from "react";
import { Link } from "react-router-dom";


export const Item = memo(({ product }) => (
  <div className="card" style={{ width: '20rem' }}>
    <div className="card-body p-0 text-center">
      <img src={product.imageURL} className="card-img-top w-100" alt="imagen" />
      <h4>Producto: {product.name}</h4>
      <p>Precio: {product.precio}</p>
      <p>Stock: {product.stock}</p>
    </div>
    <div className="card-footer">
      <Link to={`/categoria/${product.categoria}`} className="btn btn-outline-secondary w-100">
        Ver más {product.categoria.charAt(0).toUpperCase() + product.categoria.slice(1)}
      </Link>
      <Link to={`/detalle/${product.id}`} className="btn btn-outline-secondary w-100">
        Detalle
      </Link>
    </div>
  </div>
));
