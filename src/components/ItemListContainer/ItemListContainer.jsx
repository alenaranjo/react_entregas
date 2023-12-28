import { useEffect, useState } from "react";
import "../Productos/Productos.css";
import { ItemList } from "./ItemList/ItemList";
import { useParams } from "react-router-dom";
import { Loading } from "../Loading/Loading";
import {collection, getDocs, getFirestore, query, where} from 'firebase/firestore'

export const ItemListContainer = ({ greeting = 'Productos en Stock' }) => {
  const [productos, setProductos] = useState([]);
  const { cid } = useParams();
  const [loading, setLoading] = useState(true);
  const [selectedProductId, setSelectedProductId] = useState(null);

  useEffect(() => {
    const obtenerDatos = async () => {
      const dbFirestore = getFirestore();
      const queryCollection = collection(dbFirestore, 'products');

      let consulta = queryCollection;

      if (cid) {
        consulta = query(queryCollection, where('categoria', '==', cid));
        setSelectedProductId(cid);
      }

      getDocs(consulta)
        .then((resultado) => {
          setProductos(resultado.docs.map(producto => ({ id: producto.id, ...producto.data() })));
        })
        .catch((error) => { console.error('Error al obtener datos:', error)})
        .finally(() => { setLoading(false); });
    };

    obtenerDatos();
  }, [cid]);

  return (
    <div>
      <h1 className="text-center">{greeting}</h1>
      {loading ? <Loading /> : <ItemList productos={productos} />}
    </div>
  );
};