import React from 'react';
import SectionTitle from '../../../Shared/SectionTitle/SectionTitle';
import image1 from "../../../asset/photo/BG removal/From Athlet/background-removal-from-athlete-photo-before.webp"
import image2 from "../../../asset/photo/BG removal/From Athlet/background-removal-from-athlete-photo-after.webp"
import image3 from "../../../asset/photo/BG removal/From Athlet/background-removal-from-team-photo-before.webp"
import image4 from "../../../asset/photo/BG removal/From Athlet/background-removal-from-team-photo-after.webp"
import image5 from "../../../asset/photo/BG removal/From product/background-removal-and-shoe-retouch-before.webp"
import image6 from "../../../asset/photo/BG removal/From product/background-removal-and-shoe-retouch-after.webp"
import image7 from "../../../asset/photo/BG removal/From product/background-removal-from-female-handbags-photo-before.webp"
import image8 from "../../../asset/photo/BG removal/From product/background-removal-from-female-handbags-photo-after.webp"

const BackgroundRemove = () => {
    return (
        <div>
            <SectionTitle
                heading={"Background Remove -From Athlet"}
                subheading={"Removing the background from an athlete's image can enhance their focus and highlight their prowess."}
            ></SectionTitle>
            <div id='athlet'>
                <div className='grid grid-cols-2'>
                    <div className='flex'>
                        <div className=' w-72 border'>
                            <img className=' w-72 ' src={image1} alt="" />
                            <h1 className=' bg-orange-400 text-center text-white '>Before</h1>
                        </div>
                        <div className=' w-72 border'>
                            <img className=' w-72 ' src={image2} alt="" />
                            <h1 className='bg-orange-400 text-center text-white  '>After</h1>
                        </div>
                    </div>
                    <div className=' w-96 ms-36'>
                        <h1 className='text-4xl f mt-20'>Background Remove -From Athlet</h1>
                        <p className='text-sm f'>Removing the background from an athlete's image can enhance their focus and highlight their prowess. By isolating them from the surroundings, the subject becomes the center of attention, showcasing their strength and agility in a way that stands out, making them the focal point of the composition..</p>
                        <button className='px-2 py-1 bg-orange-600 text-white mt-5'> Get quote</button>
                    </div>
                </div>
                <div className='grid grid-cols-2'> <div className=' w-96 ms-36'>
                    <h1 className='text-4xl f mt-20'>background-removal-from-team-photo</h1>
                    <p className='text-sm f'>Removing the background from an athlete's image can enhance their focus and highlight their prowess. By isolating them from the surroundings, the subject becomes the center of attention, showcasing their strength and agility in a way that stands out, making them the focal point of the composition.</p>
                    <button className='px-2 py-1 bg-orange-600 text-white mt-5'> Get quote</button>
                </div>
                    <div className='flex'>
                        <div className=' w-72 border'>
                            <img className=' w-72 ' src={image3} alt="" />
                            <h1 className=' bg-orange-400 text-center text-white '>Before</h1>
                        </div>
                        <div className=' w-72 border'>
                            <img className=' w-72 ' src={image4} alt="" />
                            <h1 className='bg-orange-400 text-center text-white  '>After</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div id='product'>
                <SectionTitle
                    heading={"Background Remove -From product"}
                    subheading={"Removing the background from an athlete's image can enhance their focus and highlight their prowess."}
                ></SectionTitle>
                <div className='grid grid-cols-2'>
                    <div className='mx-auto border py-5'>
                        <div className='flex justify-center'>
                            <div className=' w-72 border'>
                                <img className=' w-72 ' src={image5} alt="" />
                                <h1 className=' bg-orange-400 text-center text-white '>Before</h1>
                            </div>
                            <div className=' w-72 border'>
                                <img className=' w-72 ' src={image6} alt="" />
                                <h1 className='bg-orange-400 text-center text-white  '>After</h1>
                            </div>
                        </div>
                        <div className='mt-5'>
                            <h1 className='text-2xl font-bold text-center'>background-removal-and-shoe-retouch</h1>
                            <p className='text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatem odio cumque veritatis neque reprehenderit earum tenetur at sequi amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum temporibus labore deserunt. Dolores amet aperiam voluptatem possimus quas id aspernatur?</p>
                            <div className='flex justify-center'>
                                <button className=' w-1/2 px-2 py-1 bg-orange-600 text-white mt-5'> Get quote</button>
                            </div>
                        </div>
                    </div>
                    <div className='mx-auto border py-5'>
                        <div className='flex justify-center'>
                            <div className=' w-72 border'>
                                <img className=' w-72 h-72 ' src={image7} alt="" />
                                <h1 className=' bg-orange-400 text-center text-white '>Before</h1>
                            </div>
                            <div className=' w-72 border'>
                                <img className=' w-72 h-72 ' src={image8} alt="" />
                                <h1 className='bg-orange-400 text-center text-white  '>After</h1>
                            </div>
                        </div>
                        <div className='mt-5'>
                            <h1 className='text-2xl font-bold text-center'>background-removal-and-shoe-retouch</h1>
                            <p className='text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatem odio cumque veritatis neque reprehenderit earum tenetur at sequi amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum temporibus labore deserunt. Dolores amet aperiam voluptatem possimus quas id aspernatur?</p>
                            <div className='flex justify-center'>
                                <button className=' w-1/2 px-2 py-1 bg-orange-600 text-white mt-5'> Get quote</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default BackgroundRemove;