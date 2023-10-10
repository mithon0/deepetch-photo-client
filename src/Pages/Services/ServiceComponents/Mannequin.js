import React, { useContext } from 'react';
import SectionTitle from '../../../Shared/SectionTitle/SectionTitle';
import image1 from "../../../asset/photo/Ghost Mannequin/clothing-item-before-ghost-mannequin-effect.webp"
import image2 from "../../../asset/photo/Ghost Mannequin/clothing-item-after-ghost-mannequin-effect.webp"
import image3 from "../../../asset/photo/Ghost Mannequin/ghost-mannequin-service-provider-near-me.webp"
import image4 from "../../../asset/photo/Ghost Mannequin/ghost-mannequin-service-provider-near-me1.webp"
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
const Mannequin = () => {
    const{user}=useContext(AuthContext)
    return (
        <div id='mannequin'>
            <SectionTitle
            heading={"Mannequin-effect"}
            subheading={"There Is some service which is related with mannequin-effect"}
            ></SectionTitle>
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
                    <h1 className='text-4xl f mt-20'>Clothing item ghost Mannequin effect</h1>
                    <p className='text-sm f'>As I stood in the dimly lit room, surrounded by rows of lifeless mannequins, the mannequin effect began to take hold. The stillness of the figures, frozen in various poses, created an eerie atmosphere that made me feel as though I had entered a world devoid of all motion and emotion.</p>
                    <button className='px-2 py-1 bg-orange-600 text-white mt-5'> <Link to={`/order/${user.email}`}>Get quote</Link></button>
                </div>
            </div>
            <div className='grid grid-cols-2'> <div className=' w-96 ms-36'>
                    <h1 className='text-4xl f mt-20'>ghost-mannequin-service-provider</h1>
                    <p className='text-sm f'>As I stood in the dimly lit room, surrounded by rows of lifeless mannequins, the mannequin effect began to take hold. The stillness of the figures, frozen in various poses, created an eerie atmosphere that made me feel as though I had entered a world devoid of all motion and emotion.</p>
                    <button className='px-2 py-1 bg-orange-600 text-white mt-5'><Link to={`/order/${user.email}`}>Get quote</Link></button>
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
    );
};

export default Mannequin;