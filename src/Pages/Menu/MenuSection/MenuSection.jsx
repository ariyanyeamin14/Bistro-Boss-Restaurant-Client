import React from 'react';
import SectionCover from '../../../Shared/SectionCover';
import MenuItem from '../../../Shared/MenuItem';
import { Link } from 'react-router-dom';

const MenuSection = ({ coverBg, coverTitle, coverSubTitle, items }) => {
    return (
        <div>
            <SectionCover img={coverBg} title={coverTitle} subTitle={coverSubTitle}></SectionCover>
            <div className='grid md:grid-cols-2 gap-10 w-[70%] mx-auto my-28'>
                {
                    items.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
            <div className='m-6 mx-auto text-center'>

                <Link to={`/shop/${coverTitle}`} className=" border-x-0 border-t-0 text-[#1F2937] border-b-4 border-[#1F2937] p-4 text-xl rounded-2xl">ORDER NOW</Link>
            </div>
        </div>
    );
};

export default MenuSection;