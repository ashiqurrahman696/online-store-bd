import { getSingleProduct } from '@/actions/server/product';
import Image from 'next/image';
import React from 'react';
import { IoIosStar } from "react-icons/io";

const ProductDetail = async({params}) => {
    const {id} = await params;
    const singleProduct = await getSingleProduct(id);
    return (
        <div className="max-w-7xl mx-auto p-6 grid md:grid-cols-2 gap-6 items-center">
            <Image src={singleProduct.imageURL} alt={singleProduct.title} width={600} height={600} className="w-full" />
            <div className="space-y-4">
                <h2 className="text-5xl font-bold">{singleProduct.title}</h2>
                <p className="text-2xl font-semibold">${singleProduct.price}</p>
                <p>{singleProduct.description}</p>
                <p><strong>Category:</strong> {singleProduct.category}</p>
                <p><strong>In stock:</strong> {singleProduct.stock}</p>
                <div className="flex gap-1 items-center">
                    <p className="font-semibold">{singleProduct.rating}</p>
                    <IoIosStar />
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;