import React, { createContext, useState } from "react";
import DataProduct from "../../data/DataProduct";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let index = 0; index < DataProduct.length+1; index++) {
        cart[index] = 0;
    }
    return cart;
}

const ShopContextProvider = (props) => {

    const [cartItems, setCartItems] = useState(getDefaultCart());

    const addToCart = (itemId) => {
        setCartItems((prev) =>({...prev, [itemId]: prev[itemId]+1}))
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev) =>({...prev, [itemId]: prev[itemId]-1}))
    }

    const contextValue = {DataProduct, cartItems, addToCart, removeFromCart};

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;