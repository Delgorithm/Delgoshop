import React, { createContext, useState } from 'react'
import DataProduct from '../data/DataProduct';


export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {}
  DataProduct.forEach((item) => {
    cart[item.id] = 0;
  });
  return cart;
}

export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const addToCart = (id) => {
    setCartItems((prev) => ({...prev, [id]: prev[id] + 1}));
  };

  const removeFromCart = (id) => {
    setCartItems((prev) => ({...prev, [id]: prev[id] - 1}));
  };
  
  const contextValue = {cartItems, addToCart, removeFromCart}

  return (
    <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
  )
}
