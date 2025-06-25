import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth'
import { Link } from 'react-router';
import SocialLogin from '../../components/SocialLogin';

const Register = () => {
    const { register, handleSubmit, formState: {errors} } = useForm();
    const { createUser, } = useAuth();

    const onSubmit = data => {
        
        createUser(data.email, data.password)
        .then(res =>{
            console.log(res.user);
        })
        .catch(err=>console.log(err.code))
    }
    return (
        <div>
               <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
      <div className="card-body">
            <h1 className='text-5xl font-bold mb-1'>Create an Account</h1>
            <small>Register with Profast</small>
            <form onSubmit={handleSubmit(onSubmit)} >
                <fieldset className="fieldset">
                    <label className="label">Email</label>
                    <input type="email" {...register("email" , {required:true})} className="input" placeholder="Email" />
                     {
                        errors.email?.type === 'required' && <p className='text-red-500'>Email is required</p>
                    }

                    <label className="label">Password</label>
                    <input type="password" 
                    {...register("password", {required:true, minLength: 6})} className="input" placeholder="Password" />
                    {
                        errors.password?.type === 'required' && <p className='text-red-500'>Password is required</p>
                    }
                    {
                        errors.password?.type === 'minLength' && <p className='text-red-500'>Password must be 6 chars or longer</p>
                    }

                    <div><a className="link link-hover">Forgot password?</a></div>

                </fieldset>
                <button className="btn btn-primary text-black mt-4">Register</button>
                <p ><small>Already have an account?<Link to='/login' className='btn btn-link -ml-3'>Login</Link>
                    </small></p>
                    <SocialLogin></SocialLogin>
            </form>
            </div>
            </div>
        </div>
    );
};

export default Register;