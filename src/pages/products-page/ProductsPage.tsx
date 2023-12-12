import ProductItemComponent from "./ProductItemComponent";

//import ProductsData from './../../data/products.json';
import IProduct from './../products-page/IProduct'
import { useProducts } from "./../../contexts/ProductProvider";

export default function ProductsPage() {

  const products: IProduct[] = useProducts();

  return (
    <div className="flex justify-center">
      <div className="pt-10 m-10 bg-slate-200 w-1024">
        <h1 className="text-3xl mb-5 text-center">Products Page</h1>
        <div className="grid grid-cols-2 gap-2">
          {
            products.map((products) => {
            return <ProductItemComponent
              key={products.id.toString()}
              product={products}
            />
          })
          }
        </div>
      </div>
    </div>
  );
}
