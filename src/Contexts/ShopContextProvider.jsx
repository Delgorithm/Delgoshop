import React, { createContext, useContext, useState } from 'react'
import DataProduct from '../data/DataProduct';

export const ShopContext = createContext();

export const useCart = () => {
  const context = useContext(ShopContext);
  if (!context) {
    throw new Error('useCart must be used within a ShopContextProvider');
  }
  return context;
};

export const ShopContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <ShopContext.Provider value={{ cart, addToCart }}>
      {children}
    </ShopContext.Provider>
  )
}

// export const ShopContext = createContext();

// export const ShopContextProvider = ({ children }) => {
//   const [cart, setCart] = useState([]);

//   const addToCart = (product) => {
//     setCart([...cart, product]);
//   };

//   return (
//     <ShopContext.Provider value={{cart, addToCart }}>
//       {children}
//     </ShopContext.Provider>
//   )

// }

// export const ShopContext = createContext(null);

// const getDefaultCart = () => {
//   let cart = {}
//   DataProduct.forEach((item) => {
//     cart[item.id] = 0;
//   });
//   return cart;
// }

// export const ShopContextProvider = (props) => {
//   const [cartItems, setCartItems] = useState(getDefaultCart());

//   const addToCart = (id) => {
//     setCartItems((prev) => ({...prev, [id]: prev[id] + 1}));
//   };

//   const removeFromCart = (id) => {
//     setCartItems((prev) => ({...prev, [id]: prev[id] - 1}));
//   };
  
//   const contextValue = {cartItems, addToCart, removeFromCart}

//   return (
//     <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
//   )
// }
