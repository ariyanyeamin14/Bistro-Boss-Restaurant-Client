import React from 'react';

const CardLayout = ({ items }) => {
    return (
        <div className='grid lg:grid-cols-3 gap-6 my-10'>
            {
                items.map(item =>
                    <div key={item._id} className="card rounded-none bg-base-200 ">
                        <figure >
                            <img className='w-full'
                                src={item.image} />
                        </figure>
                        <p className='text-white font-semibold bg-[#111827] w-fit px-5 py-3 absolute right-2 top-2'>$ {item.price}</p>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-2xl font-semibold">{item.name}</h2>
                            <p className='text-[#737373] my-6'>{item.recipe}</p>
                            <div className="card-actions">
                                <button className=" px-[30px] py-[20px] uppercase rounded-lg text-xl font-medium bg-[#e3e3e3d3] text-[#BB8506] btn-primary border-b-4 border-b-[#BB8506]">Add To Card</button>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default CardLayout;