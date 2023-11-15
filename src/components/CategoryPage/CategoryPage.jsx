import React from 'react';
import { useParams } from 'react-router-dom';
import { ItemList } from '../../components/ItemListContainer/ItemList/ItemList';

export const CategoryPage = () => {
  const { categoria } = useParams();

  return (
    <div>
      <h2>Categoría: {categoria}</h2>
      <ItemList categoria={categoria} />
    </div>
  );
};
