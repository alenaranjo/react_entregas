import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Home } from './components/Home/Home';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import { NavBar } from './components/NavBar/NavBar';
import { CartContainer } from './components/CartContainer/CartContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { Item } from './components/ItemListContainer/Item/Item';
import { createContext } from 'react';
import { CartContextProvider } from './context/CartContext';

function App() {

  return (
    <Router>
      <CartContextProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categoria/:cid" element={<Home />} />
          <Route path="/productos" element={<Item />} />
          <Route path="/detalle/:id" element={<ItemDetailContainer />} />
          <Route path="/carrito" element={<CartContainer />} />
          <Route path="*" element={<Navigate to='/' />} />
        </Routes>
      </CartContextProvider>
    </Router>
  );
}
export default App;
