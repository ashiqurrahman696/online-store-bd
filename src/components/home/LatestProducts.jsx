import { getLatestProducts } from '@/actions/server/product';
import React from 'react';
import ProductCard from '../ProductCard';

const LatestProducts = async() => {
    const productData = await getLatestProducts();
    return (
        <div className="max-w-7xl mx-auto p-6 space-y-4">
            <h2 className="text-5xl text-center font-bold">Recent Products</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {productData.map(product => <ProductCard key={product._id} product={product} />)}
            </div>
        </div>
    );
};

export default LatestProducts;