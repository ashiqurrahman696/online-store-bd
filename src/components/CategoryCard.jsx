import React from 'react';

const CategoryCard = ({category}) => {
    return (
        <div className="card bg-base-300">
            <div className="card-body">
                <h2 className="card-title">{category}</h2>
            </div>
        </div>
    );
};

export default CategoryCard;