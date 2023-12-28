import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { ItemDetail } from "./ItemDetail/ItemDetail";
import { Loading } from "../Loading/Loading";

export const ItemDetailContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const obtenerDatos = async () => {
      const dbFirestore = getFirestore();
      const queryDoc = doc(dbFirestore, 'products', id);

      try {
        const resultado = await getDoc(queryDoc);
        if (resultado.exists()) {
          setProduct({ id: resultado.id, ...resultado.data() });
        } else {
          console.log('Producto no encontrado');
        }
      } catch (error) {
        console.error('Error al obtener datos:', error);
      } finally {
        setLoading(false);
      }
    };

    obtenerDatos();
  }, [id]);

  return (
    <div className="row">
      {loading ? <Loading /> : <ItemDetail product={product} />}
    </div>
  );
};
