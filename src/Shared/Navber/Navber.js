import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../asset/logo/logo.png'
import { FaBars,FaTimes } from "react-icons/fa";
const Navber = () => {
    const [isOpen,setIsOpen]=useState(false)
    return (
        <div className=' sticky top-0  f w-full uppercase items-center md:flex justify-between py-4  bg-blue-200'>
            <div className='flex justify-between'>
                <Link to="/">
                <img className='w-40 ms-2' src={logo} alt="" />
                </Link>
                <div onClick={()=>{
                    if(isOpen===false){
                        setIsOpen(true)
                    }else{
                        setIsOpen(false)
                    }
                }} className='md:hidden mr-5 text-2xl text-blue-900'>
                    {
                        isOpen?<FaTimes/>:<FaBars/>
                    }
                </div>
            </div>
            <div className='text-center '>
                <ul className={`md:flex gap-3 t lg:translate-x-64  text-orange-700  ${isOpen?"":"hidden"}`}>
                    <li><Link to="/">Home</Link></li>
                    <li>
                    <Link to="/services">Services </Link> 
                    </li>
                    <li><Link>Examples</Link></li>
                    <li><Link>Contact us</Link></li>
                    <li><Link>Blog</Link></li>
                    <div className='mr-3 md:hidden'>
                <button className='text-white px-3 py-1 bg-blue-800'><Link to="/login">Login</Link></button>
                <button className='text-white px-3 py-1 bg-orange-600 ml-2'><Link to="/signup">Sign Up</Link></button>
            </div>
                </ul>
            </div>
            <div className='mr-3 hidden md:block'>
                <button className='text-white px-3 py-1 bg-blue-800 hover:bg-blue-950 active:bg-black'><Link to="/login">Login</Link></button>
                <button className='text-white px-3 py-1 bg-orange-600 hover:bg-orange-800 active:bg-black ml-2'><Link to="/signup">Sign Up</Link></button>
            </div>
        </div>
    );
};

export default Navber;