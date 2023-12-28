
import { ItemCounter } from '../../ItemCounter/ItemCounter';
import { useCartContext } from '../../../context/CartContext';

export const ItemDetail = ({ product }) => {
  const { addProduct, cartList } = useCartContext()


  const onAdd = (cantidad) => {
    addProduct({ ...product, cantidad });
  };
  
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
        <h4>Descripción: <br />{product.descripcion}</h4>
        <h4>Precio: {product.precio}</h4>
        <h4>Stock: {product.stock}</h4>
        <ItemCounter initial={1} stock={6} onAdd={onAdd}/>
      </div>
    </div>
  );
};
