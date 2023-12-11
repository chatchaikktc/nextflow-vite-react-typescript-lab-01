import { ReactNode, createContext, useContext, useState } from "react";
import IProduct from "../pages/products-page/IProduct";

interface ICartProviderProps {
    children: ReactNode
}

interface ICartContext {
    itemsInCart: IProduct[];
    addToCart: (product: IProduct) => void;
}

const CartContext = createContext<ICartContext>({ itemsInCart: [], addToCart: () => {} });



export default function CartProvider({ children }: ICartProviderProps) {

    const [itemsInCart, setItemsInCart] = useState<IProduct[]>([]);

    const addToCart = (product:IProduct) => {
        itemsInCart.push(product)
        setItemsInCart(itemsInCart);
    }

  return (
    <CartContext.Provider value={{ itemsInCart, addToCart }}>
        {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext);
