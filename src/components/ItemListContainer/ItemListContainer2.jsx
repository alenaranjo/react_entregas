import { useEffect, useState } from "react";
import { mFetch } from "../../helpers/mFetch";
import "../Productos/Productos.css"

export const ItemListContainer = ({ greeting = 'Productos en Stock' }) => {
  const [productos, setProductos] = useState([])
  const getFech = async () => {
    const resJson = await fetch('https://pokeapi.co/api/v2/ability/?limit=20&offset=10')
    const result = await resJson.json()
    return result
  }
  
  useEffect(() => {
    getFech()
    .then(result => console.log(result))

    // fetch('https://pokeapi.co/api/v2/ability/?limit=20&offset=10')

    //   .then(res => res.json())
      // .then(res => console.log(res.result))
  }, [])

  //console.log(productos)

  return (
    <div>
      <h1 className="text-center">{greeting}</h1>
      <div className="myCard">
        {productos.map(product => <div key={product.id} className="card w-25">
          <div className="card-body p-0 text-center">
            <img src={product.imageURL} className=" card-img-top w-100" alt='imagen' />
            <h4>Producto: {product.name}</h4>
            <p>Precio: {product.precio}</p>
            <p>Stock: {product.stock}</p>
          </div>
          <div className="card-footer">
            <button className="btn btn-outline-dark w100">Detalle</button>
          </div>
        </div>)}
      </div>
      {/* {[0, 1,2,3,4].map((num, index) => <li key={index} >{num}</li>)} */}

    </div>
  );
};
