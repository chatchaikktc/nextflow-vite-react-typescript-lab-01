import React from 'react';
import { useNavigate } from 'react-router-dom';
import IProduct from './IProduct';

interface IProductItemComponentProps {
    key: string;
    product: IProduct;
}

const ProductItemComponent = ({ product }: IProductItemComponentProps) => {
    const navigate = useNavigate();

    const handleMoreDetails = () => {
        navigate(`/products/${product.id}`);
    };

    return (
        <div className="bg-white rounded-lg shadow-md p-4 border border-gray-300">
            <h2 className="text-xl font-bold mb-4">{product.title}</h2>
            <img src={`src/${product?.image}`} alt="Product Image" className="w-fit mb-4 " />
            <button
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                onClick={handleMoreDetails}
            >
                More Details
            </button>
        </div>
    );
};

export default ProductItemComponent;
