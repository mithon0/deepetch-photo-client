import React from 'react';
import { FaEdit, FaEraser, FaMedal, FaPaintBrush, FaRegClock, FaRegEdit } from 'react-icons/fa';

const SectionTwo = () => {
    return (
        <div className='bg-orange-100 text-blue-800 pb-10'>
            <h1 className='text-center text-3xl font-semibold f pt-10'>Why Deepetch Works</h1>
            <p className='text-center text-xs md:mx-20 mx-5 font-semibold f2 mt-2'>An image can change so many things in the business world. We provide the most comprehensive professional image or photo retouching services for worldwide e-commerce business platforms or photographers who need photo editing assistance. We are the best match as a photo editing service for your e-commerce business platforms, with professional photo editors ready to help you. You can expect an excellent photo editing service from us. We will help to turn your image or photos into an optimized version that will help your business reach their goals.</p>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-20'>
                <div className='mx-20'>
                    <FaEraser className='text-6xl mx-auto '/>
                    <h3 className='text-center font-semibold mt-2'>Do You want to remove Background?We will do fot You.</h3>
                    <p className='text-xs text-center text-black'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus vel officia, nesciunt sapiente laudantium odit ipsam nam illum. Quia, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, sequi.</p>
                </div>
                <div className='mx-20'>
                    <FaEdit className='text-6xl mx-auto '/>
                    <h3 className='text-center font-semibold mt-2'>If you need to retuch Your Photo</h3>
                    <p className='text-xs text-center text-black'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus vel officia, nesciunt sapiente laudantium odit ipsam nam illum. Quia, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, sequi.</p>
                </div>
                <div className='mx-20'>
                    <FaPaintBrush className='text-6xl mx-auto '/>
                    <h3 className='text-center font-semibold mt-2'>Do You want to Get colour correction Profetionally?We will do .</h3>
                    <p className='text-xs text-center text-black'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus vel officia, nesciunt sapiente laudantium odit ipsam nam illum. Quia, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, sequi.</p>
                </div>
            </div>
            <div className='grid md:grid-cols-2 grid-cols-1 md:mx-28 mt-10'>
            <div className='mx-20'>
                    <FaRegClock className='text-6xl mx-auto '/>
                    <h3 className='text-center font-semibold mt-2'>Save your Time </h3>
                    <p className='text-xs text-center text-black'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus vel officia, nesciunt sapiente laudantium odit ipsam nam illum. Quia, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, sequi.</p>
                </div>
                <div className='mx-20'>
                    <FaMedal className='text-6xl mx-auto '/>
                    <h3 className='text-center font-semibold mt-2'>Make your product iamge profetionally edited</h3>
                    <p className='text-xs text-center text-black'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus vel officia, nesciunt sapiente laudantium odit ipsam nam illum. Quia, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, sequi.</p>
                </div>
            </div>
        </div>
    );
};

export default SectionTwo;