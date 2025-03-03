import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';
import Swal from 'sweetalert2';
import { FaShoppingCart } from 'react-icons/fa';
import useCart from '../Hooks/useCart';
import useAdmin from '../Hooks/useAdmin';

const Navbar = () => {
    const { user, logoutUser } = useContext(AuthContext)
    const [cart] = useCart();
    const[isAdmin] = useAdmin()

    const handleLogout = () => {
        logoutUser()
            .then(() => {
                Swal.fire({
                    title: "Logout Successfull!",
                    icon: "success",
                    draggable: true
                });
            })
    }

    const links = <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/menu'}>Menu</NavLink></li>
        <li><NavLink to={'/shop/salad'}>Shop</NavLink></li>
        {
            user ? <button onClick={handleLogout}>Logout</button> :
                <>
                    <li><NavLink to={'/login'}>Login</NavLink></li>
                    <li><NavLink to={'/signup'}>Signup</NavLink></li>
                </>
        }
        <li>
            <NavLink to='/dashboard/cart' className="">
                <FaShoppingCart size={25} />
                <div className="badge text-md badge-secondary">{cart.length}</div>
            </NavLink>
        </li>
        {
           user && isAdmin && <li><NavLink to={'/dashboard/adminHome'}>Dashboard</NavLink></li>
        }
        {
           user && !isAdmin && <li><NavLink to={'/dashboard/userHome'}>Dashboard</NavLink></li>
        }
    </>
    return (
        <div className="navbar fixed z-10 bg-opacity-30 bg-black text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {
                            links
                        }
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">daisyUI</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 items-center">
                    {
                        links
                    }
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Button</a>
            </div>
        </div>
    );
};

export default Navbar;