import React, { useContext } from 'react';
import banner from "../../asset/video/banner.mp4";
import SectionOne from './HomeSections/SectionOne';
import SectionTwo from './HomeSections/SectionTwo';
import OurServices from '../../Shared/OurServices/OurServices';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
const Home = () => {
    const {user}=useContext(AuthContext)
    return (
        <div className='block'>
             <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
            >
                 <div className='w-full relative '>
            <video className='w-full  ' src={banner} muted autoPlay loop />

            <div className='absolute top-0 bg-[rgba(0,0,0,0.5)] w-full h-full text-white'>
                <h1 className='md:text-5xl text-3xl f2 text-center lg:mt-60 md:mt-28 mt-5'>Profetional Photo Editing Service</h1>
               <div className='flex justify-center md:text-3xl text-xl mt-5 uppercase f'> <button className='p-3 hover:bg-orange-900 active:bg-black  bg-orange-700'><Link to={`/order/${user?.email}`}> GetStarted With Free Trail</Link></button></div>
            </div>

            </div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, scale: 1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
            >
                <SectionOne></SectionOne> 
            </motion.div>
           
            <SectionTwo></SectionTwo>
            <OurServices></OurServices>
           
        </div>
    );
};

export default Home;