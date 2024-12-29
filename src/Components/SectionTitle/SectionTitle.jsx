import React from 'react';

const SectionTitle = ({subTitle, title}) => {
    return (
        <div className='text-center w-4/12 mx-auto py-10'>
            <p className='text-yellow-600 text-xl mb-4 font-inter italic'>--- {subTitle} ---</p>
            <h2 className='text-[40px] font-inter  border-y-4 py-4'>{title}</h2>
        </div>
    );
};

export default SectionTitle;