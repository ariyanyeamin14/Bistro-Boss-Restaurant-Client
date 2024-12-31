import React from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import MenuItem from '../../../Shared/MenuItem';

const TodaysOffer = ({offered}) => {
    return (
        <div className='my-16'>
            <SectionTitle
                title="TODAY'S OFFER"
                subTitle="Don't miss"
            ></SectionTitle>
            <div className='grid md:grid-cols-2 gap-10 w-[70%] mx-auto mt-10 mb-28'>
                {
                    offered.map(item => <MenuItem key={item._id} item={item}></MenuItem> )
                }
            </div>
        </div>
    );
};

export default TodaysOffer;