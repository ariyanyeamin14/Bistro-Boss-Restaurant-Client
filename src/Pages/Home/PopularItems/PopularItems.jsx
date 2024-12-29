import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import MenuItem from '../../../Shared/MenuItem';

const PopularItems = () => {
    const [items, setItems] = useState([])
    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const popularItems = data.filter(item => item.category === "popular")
                setItems(popularItems)
            })
    }, [])
    console.log(items)
    return (
        <div className='w-[70%] mx-auto my-24'>
            <SectionTitle
                title={'FROM OUR MENU'}
                subTitle={"Popular Items"}
            ></SectionTitle>
            <div className='grid md:grid-cols-2 gap-10'>
                {
                    items.map( item => <MenuItem key={item._id} item={item}></MenuItem> )
                }
            </div>
        </div>
    );
};

export default PopularItems;