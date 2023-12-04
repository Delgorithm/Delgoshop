import React, { createContext, useState } from 'react';
import DataProduct from '../data/DataProduct';

// Create context
export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(DataProduct);

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
