import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Banner = () => {
    return (
        <div className="relative w-full h-screen max-h-96 bg-gradient-to-r from-blue-600 to-purple-600 overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-10 rounded-full -mr-48 -mt-48"></div>
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-white opacity-10 rounded-full -ml-36 -mb-36"></div>

            {/* Content container */}
            <div className="relative h-full flex flex-col items-center justify-center text-center px-6 md:px-12 lg:px-20 z-10">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
                    Discover Your Style
                </h1>
                <p className="text-lg md:text-xl text-blue-100 mb-8">
                    Shop the latest trends and find everything you need in one place.
                </p>
                <Link href="/products" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors duration-300 shadow-lg hover:shadow-xl">
                    Shop Now
                </Link>
            </div>
        </div>
    );
};

export default Banner;