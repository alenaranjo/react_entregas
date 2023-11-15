import { useEffect, useState } from "react";
import { mFetch } from "../../helpers/mFetch";
import "../Productos/Productos.css"
import { ItemList } from "./ItemList/ItemList";
import { useParams } from "react-router-dom";

export const ItemListContainer = ({ greeting = 'Productos en Stock' }) => {
  const [productos, setProductos] = useState([])
  const { cid } = useParams()

  useEffect(() => {
    if (cid) {
      mFetch()
        .then((result) => setProductos(result.filter(product => product.categoria === cid)))
        .catch((err) => console.log(err));
    } else {
      mFetch()
        .then((result) => setProductos(result))
        .catch((err) => console.log(err));
    }
  }, [cid])


  //console.log(cid)

  return (
    <div>
      <h1 className="text-center">{greeting}</h1>
      <ItemList productos={productos} />

    </div>
  );
};
