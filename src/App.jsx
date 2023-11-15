import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Home } from './components/Home/Home';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import { ItemCounter } from './components/ItemCounter/ItemCounter';
import { NavBar } from './components/NavBar/NavBar';
import { CartContainer } from './components/CartContainer/CartContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { Item } from './components/ItemListContainer/Item/Item';
// import {CategoryPage} from './components/CategoryPage/CategoryPage'

function App() {
  const onAdd = (cantidad) => {
    console.log('La cantidad es: ', cantidad);
  }

  return (

    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categoria/:cid" element={<Home />} />
        <Route path="/productos" element={<Item />} />
        <Route path="/detalle/:id" element={<ItemDetailContainer />} />
        <Route path="/carrito" element={<CartContainer />} />
        {/* <Route path="/categoria/:categoria" element={<CategoryPage />} /> Nueva ruta para categoría */}


        <Route path="*" element={<Navigate to='/' />} />
      </Routes>
      <ItemCounter initial={1} stock={6} onAdd={onAdd} />

    </Router>
  );
}

export default App;
