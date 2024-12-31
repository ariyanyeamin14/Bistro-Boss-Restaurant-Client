import React from 'react';
import SectionCover from '../../../Shared/SectionCover';
import MenuItem from '../../../Shared/MenuItem';

const MenuSection = ({ coverBg, coverTitle, coverSubTitle, items}) => {
    return (
        <div>
            <SectionCover img={coverBg} title={coverTitle} subTitle={coverSubTitle}></SectionCover>
            <div className='grid md:grid-cols-2 gap-10 w-[70%] mx-auto my-28'>
                {
                    items.map(item => <MenuItem key={item._id} item={item}></MenuItem> )
                }
            </div>
        </div>
    );
};

export default MenuSection;