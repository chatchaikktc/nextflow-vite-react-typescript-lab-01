


export default function ProductDetailPage() {

    return (
        <div className="flex justify-center">
            <div className="pt-10 m-10 bg-slate-200 w-1024">
                <div className="bg-white rounded-lg shadow-md p-4 border border-gray-300">
                    <h2 className="text-xl font-bold mb-4">Product Title</h2>
                    <img src="" alt="Product Image" className="w-fit mb-4 " />
                    <div className="flex flex-row justify-between">
                        <p className="p-2">
                            ราคา Price บาท
                        </p>
                        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded float-right">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
