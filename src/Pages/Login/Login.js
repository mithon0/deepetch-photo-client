import React, { useContext } from 'react';
import pic from "../../asset/photo/171.jpg";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { useForm } from "react-hook-form"
import Swal from 'sweetalert2';
const Login = () => {
    const { logIn } = useContext(AuthContext)
    const location =useLocation()
    const navigate =useNavigate()
    const from = location.state?.from?.pathname || "/";
    console.log(location)
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
    
      const onSubmit = (data) =>{
        logIn(data.email,data.password)
        .then(res=>{
            console.log(res)
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Your work has been saved',
                showConfirmButton: false,
                timer: 1500
              })
            navigate(from, { replace: true })
        })
        .catch(err=>{
            console.log(err)
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
                footer: '<a href="">Why do I have this issue?</a>'
              })
        })
      }


    return (
        <div className='grid md:grid-cols-2 grid-cols-1 mb-5 f'>
            <div className='hidden md:block'>
                <img src={pic} alt="" />
            </div>
            <div className=' '>
                <form onSubmit={handleSubmit(onSubmit)} className=' px-5 py-10 rounded bg-blue-100 md:mt-40 mt-3 md:mx-28 mx-5'>
                    <div className=''>
                        <label htmlFor="email">Email</label><br />
                        <input  {...register("email",{ required: true })} name='email' className='w-full border rounded px-2 py-1' type="email" placeholder='Enter your email' />
                    </div>
                    <div className='mt-2'>
                        <label htmlFor="password">Password</label><br />
                        <input  {...register("password", { required: true })} name='password' className='w-full border rounded px-2 py-1' type="password" placeholder='Enter your password' />
                    </div>
                    <div className='mt-5'>
                        <button className='w-full rounded py-1 font-bold bg-blue-700 text-white'>Login</button>
                    </div>
                    <div className='mb-2'>
                        <p className='mt-2 f'>Want to create new account? <Link className='text-blue-700 underline' to="/signup">SignUp</Link> </p>
                    </div>
                    <h2 className='text-center text-xl font-bold text-blue-700'>Login With Social Media</h2>
                    <div className='flex gap-10 justify-center items-center mt-5 text-5xl'>
                        <button className='text-red-500'><FaGoogle /></button>
                        <button className='text-blue-600'><FaFacebook /></button>
                        <button><FaGithub /></button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;