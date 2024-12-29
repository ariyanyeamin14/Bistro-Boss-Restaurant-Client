import React from 'react';

const MenuItem = ({item}) => {
    const {name, image, recipe, price} = item
    return (
        <div className='flex gap-6'>
            <img style={{borderRadius: '0 200px 200px 200px'}} className='w-[140px] h-[120px]' src={image} alt="" />
            <div>
                <h1 className='uppercase font-cinzel text-xl font-medium mb-2'>{name}</h1>
                <p className='text-gray-500'>{recipe}</p>
            </div>
            <p className='text-xl text-yellow-600 flex'>${price}</p>
        </div>
    );
};

export default MenuItem;