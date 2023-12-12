import CartCounter from "./CartCounter";

export default function NavBar() {
  return (
    <nav className="bg-black text-white">
      <div className="flex justify-between">
        <div className="flex">
          <a href="/" className="p-5 font-bold text-1m hover:bg-red-200 hover:text-black">Home</a>
          <a href="/products" className="p-5 font-bold text-1m hover:bg-red-200 hover:text-black">Products</a>
        </div>
        <CartCounter />
      </div>
    </nav>
  )
}
