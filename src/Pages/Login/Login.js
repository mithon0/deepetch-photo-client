import React from 'react';
import pic from "../../asset/photo/171.jpg";
import { Link } from 'react-router-dom';
import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa';
const Login = () => {
    return (
        <div className='grid md:grid-cols-2 grid-cols-1 mb-5 f'>
           <div className='hidden md:block'>
            <img src={pic} alt="" />
           </div>
           <div className=' '>
            <form className=' px-5 py-10 rounded bg-blue-100 md:mt-48 mt-3 md:mx-28 mx-5'>
                <div className=''>
                    <label htmlFor="email">Email</label><br />
                    <input className='w-full border rounded px-2 py-1' type="email" placeholder='Enter your email' />
                </div>
                <div className='mt-2'>
                    <label htmlFor="password">Password</label><br />
                    <input className='w-full border rounded px-2 py-1' type="password" placeholder='Enter your password' />
                </div>
                <div className='mt-5'>
                    <button className='w-full rounded py-1 font-bold bg-blue-700 text-white'>Login</button>
                </div>
                <div className='mb-2'>
                    <p className='mt-2 f'>Want to create new account? <Link className='text-blue-700 underline' to="/signup">SignUp</Link> </p>
                </div>
               <h2 className='text-center text-xl font-bold text-blue-700'>Login With Social Media</h2>
               <div className='flex gap-10 justify-center items-center mt-5 text-5xl'>
                <button className='text-red-500'><FaGoogle/></button>
                <button className='text-blue-600'><FaFacebook/></button>
                <button><FaGithub/></button>
               </div>
            </form>
           </div>
        </div>
    );
};

export default Login;