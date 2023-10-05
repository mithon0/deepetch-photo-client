import React from 'react';
import banner from "../../asset/video/banner.mp4";
import SectionOne from './HomeSections/SectionOne';
import SectionTwo from './HomeSections/SectionTwo';
import OurServices from '../../Shared/OurServices/OurServices';
import Footer from '../../Shared/Footer/Footer';
const Home = () => {
    return (
        <div>
            <div className='w-full relative'>
            <video className='w-full ' src={banner} muted autoPlay loop />

            <div className='absolute top-0 bg-[rgba(0,0,0,0.5)] w-full h-full text-white'>
                <h1 className='md:text-5xl text-3xl f2 text-center lg:mt-60 md:mt-28 mt-5'>Profetional Photo Editing Service</h1>
               <div className='flex justify-center md:text-3xl text-xl mt-5 uppercase f'> <button className='p-3 hover:bg-orange-900 active:bg-black  bg-orange-700'>GetStarted With Free Trail</button></div>
            </div>

            </div>
            <SectionOne></SectionOne>
            <SectionTwo></SectionTwo>
            <OurServices></OurServices>
            <Footer></Footer>
        </div>
    );
};

export default Home;