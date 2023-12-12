import { ReactNode, createContext, useContext } from 'react'
import IProduct from '../pages/products-page/IProduct'; 
import ProductsData from './../data/products.json';

const ProductContext = createContext<IProduct[]>([]);

const products: IProduct[] = ProductsData.products;

interface ProductProviderProps {
    children: ReactNode;
}

export default function ProductProvider({ children }: ProductProviderProps) {
  return (
    <ProductContext.Provider value={products}>
      {children}
    </ProductContext.Provider>
  )
} 

export const useProducts = () => useContext(ProductContext)