
import React from 'react'
import CartCounter from './CartCounter'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <nav className="bg-black text-white">
      <div className="flex justify-between">
        <div className='flex'>
          <Link to="/" className="text-1m font-bold p-3 hover:bg-red-600">Home</Link>
          <Link to="/products" className="text-1m font-bold p-3  hover:bg-red-600">Products</Link>
        </div>
        <CartCounter/>
      </div>
    </nav>
  )
}
