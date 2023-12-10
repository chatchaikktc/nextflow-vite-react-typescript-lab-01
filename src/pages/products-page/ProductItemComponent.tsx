
import React from 'react';
import imageUrl from './../../assets/toy-box.webp';

const ProductItemComponent: React.FC = () => {
    return (
        <div className="bg-white rounded-lg shadow-md p-4 border border-gray-300">
            <h2 className="text-xl font-bold mb-4">Product Title</h2>
            <div
                className="w-full h-[200px] bg-center bg-no-repeat bg-cover mb-4"
                style={{ backgroundImage: `url(${imageUrl})` }}
            />
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                More Details
            </button>
        </div>
    );
};

export default ProductItemComponent;
