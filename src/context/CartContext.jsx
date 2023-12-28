import { createContext, useContext, useState } from 'react';

export const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

export const CartContextProvider = ({ children }) => {
  const [totalItems, setTotalItems] = useState(0);
  const [cartList, setCartList] = useState([]);

  const addProduct = (product) => {
    const existingProduct = cartList.find((item) => item.id === product.id);

    if (existingProduct) {
      setCartList((prevCart) =>
        prevCart.map((item) =>
          item.id === product.id ? { ...item, cantidad: Math.floor(item.cantidad) + product.cantidad } : item
        )
      );
    } else {
      setCartList((prevCart) => [...prevCart, { ...product, cantidad: product.cantidad }]);
    }

    setTotalItems((prevTotalItems) => prevTotalItems + product.cantidad);
  };

  const vaciarCarrito = () => {
    setCartList([]);
    setTotalItems(0);
  };

  const eliminarProducto = (productId, cantidad) => {
    const updatedCart = cartList.filter((product) => product.id !== productId);
    setCartList(updatedCart);
    setTotalItems((prevTotalItems) => prevTotalItems - cantidad);
  };

  const totalPrice = () => {
    const total = cartList.reduce((sumaTotal, product) => {
      return sumaTotal + product.cantidad * product.precio;
    }, 0);  
    return total.toFixed(2);
  };

  return (
    <CartContext.Provider value={{ cartList, addProduct, vaciarCarrito, eliminarProducto, totalPrice, totalItems }}>
      {children}
    </CartContext.Provider>
  );
};
