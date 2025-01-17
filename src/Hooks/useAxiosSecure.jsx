import axios from 'axios';
import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { useNavigate } from 'react-router-dom';

const axiosSecure = axios.create({
    baseURL: 'https://bistro-boss-restaurant-server-peach-beta.vercel.app'
})
const useAxiosSecure = () => {
    const {logoutUser} = useContext(AuthContext)
    const navigate = useNavigate()

    axiosSecure.interceptors.request.use(function (config) {
        const token = localStorage.getItem('access-token')
        config.headers.authorization = `Bearer ${token}`;
        return config
    }, function(error) {
        return Promise.reject(error)
    })

    // intercepts 401, 403 status handle
    axiosSecure.interceptors.response.use(function(response) {
        return response;
    }, async (error) => {
        const status = error.response.status;
        if (status === 401 || status === 403){
            await logoutUser();
            navigate('/login')
        }
        return Promise.reject(error)
    })

    return axiosSecure
};

export default useAxiosSecure;