import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { mFetch } from "../../helpers/mFetch";
import { ItemCounter} from "../ItemCounter/ItemCounter"
import "../Productos/Productos.css";

export const ItemDetailContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  const onAdd = (cantidad) => {
    console.log('La cantidad es: ', cantidad);
  }

  useEffect(() => {
    mFetch()
      .then((result) => {
        const selectedProduct = result.find((prod) => prod.id === parseInt(id));
        setProduct(selectedProduct);
      })
      .catch((err) => console.log(err));
  }, [id]);

  if (!product) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="row">
      <div className="col-12 mt-5">
        <h2>Detalle del Producto</h2>
      </div>

      <div className="col-6 mt-5">
        <h3>{product.name}</h3>
        <img src={product.imageURL} className=" card-img-top w-100" alt="imagen" />
      </div>

      <div className="col-6 mt-5">
        <h4>Description: <br />{product.descripcion}</h4>
        <h4>Precio: {product.precio}</h4>
        <h4>Stock: {product.stock}</h4>
        <ItemCounter initial={1} stock={6} onAdd={onAdd}/>
      </div>
    </div>
  );
};
