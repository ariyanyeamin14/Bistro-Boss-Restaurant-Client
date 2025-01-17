import React from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import useMenu from '../../../Hooks/useMenu';
import { FaEdit } from 'react-icons/fa';
import { MdDeleteForever } from 'react-icons/md';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { Link } from 'react-router-dom';

const ManageItems = () => {
    const [menu, refetch] = useMenu()
    const axiosSecure = useAxiosSecure()

    const handleDeleteItem = (item) => {
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
                axiosSecure.delete(`/menu/${item._id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch()
                            Swal.fire({
                                position: "top-center",
                                icon: "success",
                                title: `${item.name} has deleted`,
                                showConfirmButton: false,
                                timer: 1500
                            });
                        }
                    })
            }
        });
    }
    return (
        <div className='bg-[#f3f3f3] py-20'>
            <SectionTitle
                title='MANAGE ALL ITEMS'
                subTitle='Hurry Up'>
            </SectionTitle>
            <div className='bg-[#ffffff] p-10 my-10 w-[80%] mx-auto'>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr className='uppercase bg-[#d1a054] py-2 rounded-t-lg text-white text-lg font-normal'>
                                <th>
                                </th>
                                <th>ITEM IMAGE</th>
                                <th>ITEM NAME</th>
                                <th>PRICE</th>
                                <th>UPDATE</th>
                                <th>DELETE</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                menu.map((item, index) =>
                                    <tr key={item._id}>
                                        <th>
                                            {index + 1}
                                        </th>
                                        <td>
                                            <div className="flex items-center gap-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle h-12 w-12">
                                                        <img
                                                            src={item.image} />
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            {item.name}
                                        </td>
                                        <td>{item.price}</td>
                                        <th>
                                            <button className="bg-[#d1a054] p-3 rounded-lg">
                                                <Link to={`/dashboard/updateItem/${item._id}`}> <FaEdit color='white' size={20} /> </Link>
                                            </button>
                                        </th>
                                        <th>
                                            <button onClick={() => handleDeleteItem(item)} className="bg-red-700 p-3 rounded-lg"> <MdDeleteForever color='white' size={20} /> </button>
                                        </th>
                                    </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageItems;