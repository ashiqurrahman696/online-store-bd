import React from 'react';
import CategoryCard from '../CategoryCard';

const Categories = () => {
    const categoryList = ["Electronics", "Kitchen", "Grocery", "Home", "Lifestyle", "Furniture", "Fashion", "Accessories", "Foods", "Sports", "Outdoor", "Fitness"];
    return (
        <div className="max-w-7xl mx-auto p-6 space-y-4">
            <h2 className="text-5xl text-center font-bold">Categories</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {categoryList.map((category, index) => <CategoryCard key={index} category={category} />)}
            </div>
        </div>
    );
};

export default Categories;