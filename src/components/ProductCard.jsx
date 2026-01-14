import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { IoIosStar } from "react-icons/io";

const ProductCard = ({product}) => {
    return (
        <div className="card bg-base-300 shadow-sm">
            <figure className="px-4 pt-4">
                <Image
                    src={product.imageURL}
                    alt={product.title}
                    width={300}
                    height={300}
                    className="w-full aspect-square rounded-xl" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{product.title}</h2>
                <p className="line-clamp-3">{product.description}</p>
                <div className="flex justify-between items-center">
                    <p className="font-semibold">${product.price}</p>
                    <div className="flex gap-1 items-center">
                        <IoIosStar />
                        <p className="font-semibold">{product.rating}</p>
                    </div>
                </div>
                <div className="card-actions">
                    <Link href={`/products/${product._id}`} className="btn btn-primary">View Details</Link>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;