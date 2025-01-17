import React from 'react';
import useCart from '../../../Hooks/useCart';
import { FaDeleteLeft } from 'react-icons/fa6';
import { MdDeleteForever } from 'react-icons/md';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { Link } from 'react-router-dom';

const Cart = () => {
    const [cart, refetch] = useCart()
    const totalPrice = cart.reduce((total, item) => total + item.price, 0)
    const axiosSecure = useAxiosSecure()

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/carts/${id}`)
                    .then(res => {
                        // console.log(res.data)
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            refetch()
                        }
                    }
                    )
            }
        });
    }
    return (
        <div className=' bg-[#f3f3f3] p-10 my-20 w-[80%] mx-auto'>
            <div className='flex justify-between mb-6'>
                <h1 className='font-cinzel text-3xl font-bold'>TOTAL ORDERS: {cart.length} </h1>
                <h1 className='font-cinzel text-3xl font-bold'>TOTAL Price: {totalPrice} </h1>
                {
                    cart.length ?
                        <Link to='/dashboard/payment' className='bg-[#d1a054] text-2xl btn text-white font-cinzel'>PAY</Link>
                        :
                        <button disabled className='bg-[#d1a054] text-2xl btn text-white font-cinzel'>PAY</button>

                }
            </div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>

                            </th>
                            <th>ITEM IMAGE</th>
                            <th>ITEM NAME</th>
                            <th>PRICE</th>
                            <th>ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map((item, index) => <tr key={item._id}>
                                <th>
                                    <label>
                                        {index + 1}
                                    </label>
                                </th>
                                <td>
                                    <div className="">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img
                                                    src={item.image}
                                                    alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {item.name}
                                </td>
                                <td>{item.price}</td>
                                <th>
                                    <button onClick={() => handleDelete(item._id)} className=""><MdDeleteForever size={30} /> </button>
                                </th>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Cart;