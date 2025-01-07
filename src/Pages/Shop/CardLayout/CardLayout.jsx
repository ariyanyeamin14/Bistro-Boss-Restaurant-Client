import React from 'react';
import FoodCard from '../../../Components/FoodCard/FoodCard';

const CardLayout = ({ items }) => {
    return (
        <div className='grid lg:grid-cols-3 gap-6 my-10'>
            {
                items.map(item =>
                    <FoodCard key={item._id} item={item}></FoodCard>
                )
            }
        </div>
    );
};

export default CardLayout;