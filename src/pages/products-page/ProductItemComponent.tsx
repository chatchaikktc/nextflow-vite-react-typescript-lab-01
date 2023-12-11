
import IProduct from './IProduct';

interface IProductItemComponentProps {
    key: string;
    product: IProduct;
}

const ProductItemComponent = ({ product }: IProductItemComponentProps) => {


    return (
        <div className="bg-white rounded-lg shadow-md p-4 border border-gray-300">
            <h2 className="text-xl font-bold mb-4">Product Title</h2>
            {/* product.image */}
            <img src="" alt="Product Image" className="w-fit mb-4" />
            <button
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            >
                More Details
            </button>
        </div>
    );
};

export default ProductItemComponent;
