import React from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import MenuItem from '../../../Shared/MenuItem';
import useMenu from '../../../Hooks/useMenu';

const PopularItems = () => {
    const [menu] = useMenu()
    const puopular = menu.filter(item => item.category === "popular")
    return (
        <div className='w-[70%] mx-auto my-24'>
            <SectionTitle
                title={'FROM OUR MENU'}
                subTitle={"Popular Items"}
            ></SectionTitle>
            <div className='grid md:grid-cols-2 gap-10'>
                {
                    puopular.map( item => <MenuItem key={item._id} item={item}></MenuItem> )
                }
            </div>
        </div>
    );
};

export default PopularItems;