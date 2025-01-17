import React, { useContext } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const PaymentHistory = () => {
    const { user } = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();

    const { data: payments = [] } = useQuery({
        queryKey: ['payments', user.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments/${user.email}`)
            return res.data
        }
    })
    return (
        <div>
            <div className='bg-white p-10 my-20 mx-24'>
                <h1 className='font-cinzel text-3xl font-bold uppercase mb-5'>Payment History : {payments.length}</h1>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr className='uppercase bg-[#d1a054] py-2 rounded-t-lg text-white text-lg font-normal'>
                                <th></th>
                                <th className='font-normal'>Email</th>
                                <th className='font-normal'>TRX Id</th>
                                <th className='font-normal'>Total Price</th>
                                <th className='font-normal'>Payment Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                payments.map((payment, index) => <tr key={index} className='py-8'>
                                    <th>{index + 1}</th>
                                    <td>{payment?.email}</td>
                                    <td>{payment?.transactionId}</td>
                                    <td>{payment?.price}</td>
                                    <td>{payment?.date}</td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default PaymentHistory;