

import React, { ReactNode, createContext, useContext } from 'react'
import ProductJSON from "./../data/products.json";
import IProduct from '../pages/products-page/IProduct';

const ProductContext = createContext<IProduct[]>([]);

interface ProductProviderProps {
    children: ReactNode;
}
  

export default function ProductProvider({ children }: ProductProviderProps) {

  const products: IProduct[] = ProductJSON.products;

  return (
    <ProductContext.Provider value={products}>
        {children}
    </ProductContext.Provider>
  )
}

export const useProducts = () => useContext(ProductContext);
