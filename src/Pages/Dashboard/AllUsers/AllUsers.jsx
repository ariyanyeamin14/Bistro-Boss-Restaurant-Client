import React from 'react';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { MdDeleteForever } from 'react-icons/md';
import { FaUsers } from 'react-icons/fa6';
import Swal from 'sweetalert2';

const AllUsers = () => {
    const axiosSecure = useAxiosSecure()
    // tansrack query
    const { data: users = [] , refetch} = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data
        }
    })

    const handleMakeAdmin = (user) => {
        Swal.fire({
            title: "Are you sure to make him admin?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, make admin!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.patch(`/users/admin/${user._id}`)
                    .then(res => {
                        if (res.data.modifiedCount > 0) {
                            Swal.fire({
                                title: "Updated!",
                                text: `${user.name} now is an admin`,
                                icon: "success"
                            });
                            refetch()
                        }
                    }
                    )
            }
        });
    }

    const handleDeleteUser = (user) => {
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
                axiosSecure.delete(`/users/${user._id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch()
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            }); 
                        }
                    }
                    )
            }
        });
    }
    return (
        <div>
            <div className='bg-white p-10 my-20 mx-24'>
                <h1 className='font-cinzel text-3xl font-bold uppercase mb-5'>Total useres : {users.length}</h1>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr className='uppercase bg-[#d1a054] py-2 rounded-t-lg text-white text-lg font-normal'>
                                <th></th>
                                <th className='font-normal'>Name</th>
                                <th className='font-normal'>Email</th>
                                <th className='font-normal'>Role</th>
                                <th className='font-normal'>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user, index) => <tr key={index} className='py-8'>
                                    <th>{index + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        {
                                            user?.role === 'admin' ? 'Admin' : <button onClick={() => handleMakeAdmin(user)} className="bg-[#d1a054] p-3 rounded-lg"> <FaUsers color='white' size={30} /> </button>
                                        }
                                    </td>
                                    <td>
                                        <button onClick={() => handleDeleteUser(user)} className="bg-red-700 p-3 rounded-lg"> <MdDeleteForever color='white' size={30} /> </button>
                                    </td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllUsers;