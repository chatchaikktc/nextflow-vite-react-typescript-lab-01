

import ProductItemComponent from './ProductItemComponent';
import IProduct from './IProduct';
import ProductJSON from "./../../data/products.json";


export default function ProductsPage() {

  
  const products: IProduct[] = ProductJSON.products;

  return (
    <div className="flex justify-center">
      <div className="pt-10 m-10 bg-slate-200 w-1024">
        <h1 className="text-3xl mb-5 text-center">Products Page</h1>
        <div className="grid grid-cols-2 gap-4">
          {products.map((product) => (
            <ProductItemComponent key={product.title} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
