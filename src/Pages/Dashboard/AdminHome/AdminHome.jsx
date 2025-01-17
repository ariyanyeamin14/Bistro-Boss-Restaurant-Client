import React, { useContext } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const AdminHome = () => {
    const { user } = useContext(AuthContext)
    const axiosSecure = useAxiosSecure()

    const { data: stats = [], isPending } = useQuery({
        queryKey: ['admin-stats'],
        queryFn: async () => {
            const res = await axiosSecure.get('/admin-stats');
            return res.data
        }
    })

    if (isPending) {
        return <div className='h-screen flex flex-col items-center justify-center '><progress className="progress w-56"></progress></div>
    }

    return (
        <div className='flex flex-col justify-center items-center h-screen'>
            <div className="stats stats-vertical lg:stats-horizontal shadow">
                <div className="stat">
                    <div className="stat-title">Revenue</div>
                    <div className="stat-value">{stats?.revenue}$</div>
                    <div className="stat-desc">Jan 1st - Feb 1st</div>
                </div>

                <div className="stat">
                    <div className="stat-title">Users</div>
                    <div className="stat-value">{stats.users}</div>
                    <div className="stat-desc">↗︎ 400 (22%)</div>
                </div>

                <div className="stat">
                    <div className="stat-title">Product</div>
                    <div className="stat-value">{stats.menuItems}</div>
                    <div className="stat-desc">↗︎ 400 (22%)</div>
                </div>

                <div className="stat">
                    <div className="stat-title">Orders</div>
                    <div className="stat-value">{stats.orders}</div>
                    <div className="stat-desc">↘︎ 90 (14%)</div>
                </div>
            </div>
        </div>
    );
};

export default AdminHome;