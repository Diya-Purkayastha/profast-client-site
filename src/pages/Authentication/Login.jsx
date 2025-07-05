import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router';
import SocialLogin from '../../components/SocialLogin';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const {login} = useAuth()
    const location = useLocation()
    const from = location.state?.from || '/'
    const navigate = useNavigate();


    const onSubmit = data => {
        login(data.email, data.password)
        .then(res=>{
            console.log(res.user)
            navigate(from)
        })
        .catch(er=>console.log(er.code))

    }
    return (
        <div>
            <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
                <div className="card-body">
                    <h1 className='text-5xl font-bold mb-1'>Welcome Back</h1>
                    <small>Login with Profast</small>
                    <form onSubmit={handleSubmit(onSubmit)} >
                        <fieldset className="fieldset">
                            <label className="label">Email</label>
                            <input type="email" {...register("email", { required: true })} className="input" placeholder="Email" />
                            {
                                errors.email?.type === 'required' && <p className='text-red-500'>Email is required</p>
                            }
                            <label className="label">Password</label>
                            <input type="password"
                                {...register("password", { required: true, minLength: 6 })} className="input" placeholder="Password" />
                            {
                                errors.password?.type === 'required' && <p className='text-red-500'>Password is required</p>
                            }
                            {
                                errors.password?.type === 'minLength' && <p className='text-red-500'>Password must be 6 chars or longer</p>
                            }

                            <div><a className="link link-hover">Forgot password?</a></div>

                        </fieldset>
                        <button className="btn btn-primary text-black mt-4">Login</button>
                        <p ><small>New to this site?<Link state={from} to='/register' className='btn btn-link -ml-3'>Register</Link>
                        </small></p>
                       <SocialLogin></SocialLogin>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;