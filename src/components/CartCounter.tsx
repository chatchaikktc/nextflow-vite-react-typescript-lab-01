

import { useCart } from '../contexts/CartProvider'

export default function CartCounter() {

   const { itemsInCart } = useCart();

  return (
    <div className="text-1m font-bold p-3 hover:bg-red-600">Cart: {itemsInCart.length}</div>
  )
}
