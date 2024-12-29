import React from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import featuredImg from '../../../assets/home/featured.jpg'

const FeaturedItem = () => {
    return (
        <div className='py-28 featured-item text-white'>
            <SectionTitle
                title="FEATURED ITEM"
                subTitle="Check it out"
            ></SectionTitle>
            <div className='flex justify-between items-center w-[70%] mx-auto gap-16 mt-10'>
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className='space-y-4'>
                    <h2 className='text-2xl'>30 March, 2024</h2>
                    <h2 className='text-2xl'>WHERE CAN I GET SOME?</h2>
                    <p className='text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                    <button className=" border-x-0 border-t-0 text-white border-b-4 border-white p-4 text-xl rounded-2xl">ORDER NOW</button>
                </div>
            </div>
        </div>
    );
};

export default FeaturedItem;