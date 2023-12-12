
import { useNavigate } from 'react-router-dom';
import IProduct from './IProduct';

interface IProductItemComponentProps {
    key: string;
    product: IProduct | undefined;
}

const ProductItemComponent = ({ product }: IProductItemComponentProps) => {

    const navigate = useNavigate();

    const openDetailsPage = () => {
        navigate(`/products/${product?.id}`);
    }

    return (
        <div className="bg-white rounded-lg shadow-md p-4 border border-gray-300">
            <h2 className="text-xl font-bold mb-4">{product?.title}</h2>
            {/* product.image */}
            <img src={product?.image} alt="Product Image" className="w-fit mb-4" />
            <button
                onClick={openDetailsPage}
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            >
                More Details
            </button>
        </div>
    );
};

export default ProductItemComponent;
