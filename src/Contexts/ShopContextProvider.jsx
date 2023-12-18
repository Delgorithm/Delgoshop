import React, { createContext, useContext, useState } from 'react'

export const ShopContext = createContext();

export const useCart = () => {
  const context = useContext(ShopContext);
  if (!context) {
    throw new Error('useCart must be used within a ShopContextProvider');
  }
  return context;
}

export const ShopContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const productExists = cart.find(item => item.id === product.id);
    if (productExists) {
      const updatedCart = cart.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item  
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  }


  // Increment
  const incrementQuantity = (productId) => {
    const updatedCart = cart.map(item => {
      if (item.id === productId) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setCart(updatedCart);
  };

  // Decrement
  const decrementQuantity = (productId) => {
    const updatedCart = cart.map(item => {
      if (item.id === productId) {
        return { ...item, quantity: item.quantity - 1};
      }
      return item;
    })
    .filter(item => item.quantity > 0);
  setCart(updatedCart);
  };

  return (
    <ShopContext.Provider value={{ cart, addToCart, incrementQuantity, decrementQuantity }}>
      {children}
    </ShopContext.Provider>
  )
}