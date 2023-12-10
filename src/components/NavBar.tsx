
import React from 'react'

export default function NavBar() {
  return (
    <nav className="bg-black text-white">
      <div className="flex">
        <a href="/" className="text-1m font-bold p-3 hover:bg-red-600">Home</a>
        <a href="/products" className="text-1m font-bold p-3  hover:bg-red-600">Products</a>
      </div>
    </nav>
  )
}
