
import React from 'react'

export default function NavBar() {
  return (
    <nav className="bg-black text-white">
      <div className="flex justify-between p-5">
        <a href="/" className="text-2xl font-bold">Home</a>
        <a href="/products" className="text-2xl font-bold">Products</a>
      </div>
    </nav>
  )
}
