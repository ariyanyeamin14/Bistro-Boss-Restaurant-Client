import React from 'react';
import { FaBars,  FaCalendar, FaCalendarCheck, FaEnvelope, FaHistory, FaHome, FaShoppingCart, FaUsersCog, FaUtensils } from 'react-icons/fa';
import { FaBookAtlas, FaMartiniGlass, FaShop, FaSpoon } from 'react-icons/fa6';
import { IoIosMenu } from 'react-icons/io';
import { NavLink, Outlet } from 'react-router-dom';
import useAdmin from '../Hooks/useAdmin';
import useCart from '../Hooks/useCart';

const Dashboard = () => {
    const [isAdmin] = useAdmin()
    const [cart] = useCart()
    return (
        <div className='flex'>
            <div className='w-[340px] min-h-screen bg-[#d1a054]'>
                <ul className='font-cinzel font-medium px-10 py-10 space-y-7 text-lg'>
                    {
                        isAdmin ? <>
                            <li>
                                <NavLink to='/dashboard/adminHome' className='flex items-center gap-4'>
                                    <FaHome color='#151515' size={25}></FaHome> Admin Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/addItems' className='flex items-center gap-4'>
                                    <FaUtensils color='#151515' size={25}></FaUtensils> add items
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/manageItems' className='flex items-center gap-4'>
                                    <FaBars color='#151515' size={25}></FaBars>manage items
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/cart' className='flex items-center gap-4'>
                                    <FaBookAtlas color='#151515' size={25}></FaBookAtlas> manage bookings
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/users' className='flex items-center gap-4'>
                                    <FaUsersCog color='#151515' size={25}></FaUsersCog> all users
                                </NavLink>
                            </li>
                        </> : <>
                            <li>
                                <NavLink to='/dashboard/userHome' className='flex items-center gap-4'>
                                    <FaHome color='#151515' size={25}></FaHome> User Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/cart' className='flex items-center gap-4'>
                                    <FaCalendar color='#151515' size={25}></FaCalendar> RESERVATION
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/paymentHistory' className='flex items-center gap-4'>
                                    <FaHistory color='#151515' size={25}></FaHistory>PAYMENT HISTORY
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/cart' className='flex items-center gap-4'>
                                    <FaShoppingCart color='#151515' size={25}></FaShoppingCart> MY CART ({cart.length})
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/cart' className='flex items-center gap-4'>
                                    <FaMartiniGlass color='#151515' size={25}></FaMartiniGlass> ADD REVIEW
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/cart' className='flex items-center gap-4'>
                                    <FaCalendarCheck color='#151515' size={25}></FaCalendarCheck> MY BOOKING
                                </NavLink>
                            </li>
                        </>
                    }
                    <li> <hr /> </li>
                    <li>
                        <NavLink to='/' className='flex items-center gap-4'>
                            <FaHome color='#151515' size={25}></FaHome>Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/menu' className='flex items-center gap-4'>
                            <IoIosMenu color='#151515' size={25} /> Menu
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/shop/salad' className='flex items-center gap-4'>
                            <FaShop color='#151515' size={25}></FaShop>Shop
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/cart' className='flex items-center gap-4'>
                            <FaEnvelope color='#151515' size={25}></FaEnvelope>Contact
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className='flex-1 bg-[#f6f6f6]'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;