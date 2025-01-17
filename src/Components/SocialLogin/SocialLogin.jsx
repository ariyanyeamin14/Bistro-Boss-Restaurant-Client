import React, { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../Providers/AuthProvider';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const { googleSignin } = useContext(AuthContext)
    const axiosPublic = useAxiosPublic()
    const navigate = useNavigate()

    const handleGoogleSignin = () => {
        googleSignin()
            .then((result) => {
                const user = result.user;
                const UserInfo = {
                    name: user?.displayName,
                    email: user?.email
                }
                axiosPublic.post('/users', UserInfo)
                .then(res => {
                    // console.log(res.data)
                    navigate('/')
                })
            })
    }
    return (
        <div onClick={handleGoogleSignin} className='text-center justify-center py-3 rounded-xl text-white bg-[#d1a054] w-full flex items-center gap-3'>
            <FaGoogle />
            <button className=''> Signin with Google</button>
        </div>
    );
};

export default SocialLogin;