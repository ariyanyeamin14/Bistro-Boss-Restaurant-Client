import React, { useContext, useEffect, useState } from 'react';
import { Link, replace, useLocation, useNavigate } from 'react-router-dom';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2';


const Login = () => {
    const [capchaValue, setCapchaValue] = useState()
    const [disabled, setDisabled] = useState(true)
    const {loginUser} = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()

    const from = location.state?.from?.pathname || '/';

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    useEffect(()=>{
        if (validateCaptcha(capchaValue)==true) {
            setDisabled(false)
        }
        else{
            setDisabled(true)
        }
    }, [capchaValue])

    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        loginUser(email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user)
            Swal.fire({
                title: "Login Successfull!",
                icon: "success",
                draggable: true
              });
            navigate(from, { replace: true})
          })
    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleSubmit} className="card-body">
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
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                            < LoadCanvasTemplate />
                            </label>
                            <input onBlur={(e) => setCapchaValue(e.target.value)} type="text" name='capcha' placeholder="Type capcha & click outside" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button disabled={false} className="btn btn-primary bg-[#d1a054] text-white border-none">Sign In</button>
                        </div>
                    </form>
                    <p className='text-center text-[#d1a054] pb-4'>New here? <Link to={'/signup'}>Create a New Account</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;