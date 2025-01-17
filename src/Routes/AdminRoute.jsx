import React, { useContext } from 'react';
import useAdmin from '../Hooks/useAdmin';
import { AuthContext } from '../Providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const AdminRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const [isAdmin, isAdminLoading] = useAdmin()
    const location = useLocation()

    if(loading || isAdminLoading){
        return <div className='h-screen flex flex-col items-center justify-center '><progress className="progress w-56"></progress></div>
    }

    if(user && isAdmin){
        return children
    }

    return <Navigate to={'/login'} state={{from: location}} replace></Navigate>
};

export default AdminRoute;