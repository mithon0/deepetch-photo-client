import React from 'react';
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';
import pic1 from "../../asset/photo/Ghost Mannequin/clothing-item-after-ghost-mannequin-effect.webp"
import pic2 from "../../asset/photo/Ghost Mannequin/clothing-item-before-ghost-mannequin-effect.webp"
import pic3 from "../../asset/photo/Ghost Mannequin/ghost-mannequin-service-provider-near-me.webp"
import pic4 from "../../asset/photo/Ghost Mannequin/ghost-mannequin-service-provider-near-me1.webp"
import pic5 from "../../asset/photo/Ghost Mannequin/invisible-ghost-mannequin-effect-service-provider-after.webp"

import pic6 from "../../asset/photo/Ghost Mannequin/invisible-ghost-mannequin-effect-service-provider-before.webp"
import pic7 from "../../asset/photo/Product Retouch/high-end-product-photo-retouch-for-listings-after.webp"
import pic8 from "../../asset/photo/Product Retouch/high-end-product-photo-retouch-for-listings-before.webp"
import pic9 from "../../asset/photo/Product Retouch/juice-bottle-after-retouch.webp"
import pic10 from "../../asset/photo/Product Retouch/juice-bottle-before-retouch.webp"
import pic11 from "../../asset/photo/Product Retouch/piano-high-end-retouch-after.webp"
import pic12 from "../../asset/photo/Product Retouch/piano-high-end-retouch-before.webp"



const Examples = () => {
    return (
        <div>
            <SectionTitle
            heading={"Examples"}
            subheading={"There is some Examples Here"}
            ></SectionTitle>
            <div>
                <h1 className='text-center text-2xl font-bold'>Ghost mannequin</h1>
            </div>
            <div className='grid grid-cols-3 mx-10'>
                <div className='flex gap-2 border justify-center'>
                    <img className='w-44' src={pic1} alt="" />
                    <img className='w-44' src={pic2} alt="" />
                </div>
                <div className=' flex gap-2 border justify-center'>
                    <img className='w-44' src={pic3} alt="" />
                    <img className='w-44' src={pic4} alt="" />
                </div>
                <div className='flex gap-2 border justify-center'>
                    <img className='w-44' src={pic5} alt="" />
                    <img className='w-44' src={pic6} alt="" />
                </div>
            </div>
            <div>
                <h1 className='text-center text-2xl font-bold'>Product Retuch</h1>
            </div>
            <div className='grid grid-cols-3 mx-10'>
                <div className='flex gap-2 border justify-center'>
                    <img className='w-44' src={pic7} alt="" />
                    <img className='w-44' src={pic8} alt="" />
                </div>
                <div className=' flex gap-2 border justify-center'>
                    <img className='w-44' src={pic9} alt="" />
                    <img className='w-44' src={pic10} alt="" />
                </div>
                <div className='flex gap-2 border justify-center'>
                    <img className='w-44' src={pic11} alt="" />
                    <img className='w-44' src={pic12} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Examples;