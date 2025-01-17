import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import SocialLogin from '../../Components/SocialLogin/SocialLogin';

const Signup = () => {
    const { createUser, updateUserProfile, logoutUser } = useContext(AuthContext)
    const navigate = useNavigate()
    const axiosPublic = useAxiosPublic()

    const handleSubmit = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const image = form.image.value

        createUser(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                // console.log(user)
                updateUserProfile(name, image)
                    .then(() => {
                        const userInfo = {
                            name: name,
                            email: email
                        }
                        axiosPublic.post('/users', userInfo)
                            .then(res => {
                                if (res.data.insertedId) {
                                    // console.log('user signuped and updated profile')
                                    logoutUser()
                                    navigate('/')
                                }
                            })
                    })

                // .then(()=>{
                //     console.log('user updated')
                // })
                // .catch((error) => {
                //     console.log(error)
                // })
            })
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Signup now!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input name='name' type="text" placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Image URL</span>
                            </label>
                            <input name='image' type="text" placeholder="Image URL" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name='email' type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name='password' type="password" placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn border-none text-white bg-[#d1a054]  btn-primary">Sign Up</button>
                        </div>
                    </form>
                    <p className='text-center text-[#d1a054] '>Already registered? <Link to={'/login'}>Go to Log In</Link></p>
                    <div className='card-body'>
                        <div className='divider'></div>
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;