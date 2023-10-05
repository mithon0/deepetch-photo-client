import React from 'react';
import { FaDiceD6, FaRegBuilding, FaRegSun } from 'react-icons/fa';

const SectionOne = () => {
    return (
        <div className='bg-blue-950 text-white m-0 pt-10'>
            <h1 className='text-center md:text-3xl text-xl font-bold f '>How DeepTch Works</h1>

            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-10'>
                <div className='mx-10'>
                    <FaRegSun className='text-7xl text-orange-600 mx-auto'  />
                    <h3 className='text-center text-orange-600 text-2xl font-thin'>WE WORKS FROM</h3>
                    <p className='text-xs text-center mb-10 mt-3'>Deep Etch Photo has been in the business since 2011, specializing in portrait photo editing using Photoshop and GIMP. Back then, we only offered basic image retouching
                        services. But guess what? Today, we've expanded our horizons and now provide the widest range of professional online photo retouching services at the highest level. Our
                        team of talented retouchers can handle any kind of Photoshop work, no matter the photography genre or complexity level.</p>
                </div>
                <div className='mx-10'>
                    <FaDiceD6 className='text-7xl text-orange-600 mx-auto'  />
                    <h3 className='text-center text-orange-600 text-2xl font-thin'>Our Mission</h3>
                    <p className='text-xs text-center mb-10 mt-3'>Our mission is simple yet powerful: to offer fast, affordable, secure, and top-notch photo retouching help to both beginner and professional photographers. We understand 
that not everyone has the time or skills to do image editing on their own, and that's where we come in. At Deep Etch Photo, we've got your back!</p>
                </div>
                <div className='mx-10'>
                    <FaRegBuilding className='text-7xl text-orange-600 mx-auto'  />
                    <h3 className='text-center text-orange-600 text-2xl font-thin'>Our Facilities</h3>
                    <p className='text-xs text-center mb-10 mt-3'>We know that many photographers are just starting out, so we've tailored our specialized photo editing services to cater to everyone's needs. We're constantly evolving and 
striving to make your work easier. You focus on capturing those amazing shots, and leave the editing to us. We've got the skills and passion to bring out the best in your 
photos.</p>
                </div>
            </div>
        </div>
    );
};

export default SectionOne;