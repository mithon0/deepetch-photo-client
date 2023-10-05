import React from 'react';
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import pic2 from "../../asset/photo/Product Retouch/high-end-product-photo-retouch-for-listings-after.webp"
import pic1 from "../../asset/photo/Product Retouch/high-end-product-photo-retouch-for-listings-before.webp"
import pic3 from "../../asset/photo/BG removal/From Model/remove-background-from-stock-photo-before.webp"
import pic4 from "../../asset/photo/BG removal/From Model/remove-background-from-stock-photo-after.webp"
import pic5 from "../../asset/photo/Hign End Manipulation/remove-background-and-composition-before.webp"
import pic6 from "../../asset/photo/Hign End Manipulation/remove-background-and-composition-after.webp"
import pic7 from "../../asset/photo/Ghost Mannequin/invisible-ghost-mannequin-effect-service-provider-before.webp"
import pic8 from "../../asset/photo/Ghost Mannequin/invisible-ghost-mannequin-effect-service-provider-after.webp"
import pic9 from "../../asset/photo/Real Estate Retouch/sky-replacement-grass-added-and-color-correction-before.webp"
import pic10 from "../../asset/photo/Real Estate Retouch/sky-replacement-grass-added-and-color-correction-after.webp"


const OurServices = () => {
  const [sliderRef] = useKeenSlider({
    
    loop: true,
    mode: "free-snap",
    slides: {
      perView: 3,
      spacing: 15,
      
    },
  })
  return (
    <div className="bg-blue-950">
      <h1 className='text-white text-5xl pt-5 text-center font-bold f'>Our Services</h1>
      <p className='text-center text-white'>There is Our Main services</p>
      <div ref={sliderRef} className="keen-slider text-white mt-7">
        <div className="keen-slider__slide number-slide1 ">
          <div className='md:flex'>
            <img className='w-40 h-72' src={pic1} alt="" />
            <img className='w-40 h-72' src={pic2} alt="" />
          </div>
          <h3 className='md:ms-16'>product Retuch</h3>
          <p className='text-xs ms-2 mb-10'>
            high end product photo retouch Before and After
          </p>
        </div>
        <div className="keen-slider__slide number-slide2 ">
          <div className='md:flex'>
            <img className='w-40 h-72' src={pic3} alt="" />
            <img className='w-40 h-72' src={pic4} alt="" />
          </div>
          <h3 className='md:ms-16'>Remove backgournd</h3>
          <p className='text-xs ms-2 mb-10'>
            Remove background from stock photo before and after
          </p>
        </div>
        <div className="keen-slider__slide number-slide3 ">
          <div className='md:flex'>
            <img className='w-40 h-72' src={pic5} alt="" />
            <img className='w-40 h-72' src={pic6} alt="" />
          </div>
          <h3 className='md:ms-16'>Green screen Manupulation</h3>
          <p className='text-xs ms-2 mb-10'>
            Remove background and composition before and after
          </p>
        </div>
        <div className="keen-slider__slide number-slide4 ">
          <div className='md:flex'>
            <img className='w-40 h-72' src={pic7} alt="" />
            <img className='w-40 h-72' src={pic8} alt="" />
          </div>
          <h3 className='md:ms-16'>Ghost Mannequin</h3>
          <p className='text-xs ms-2 mb-10'>
            Invisible ghost mannequin effect service provider before and after
          </p>
        </div>
        <div className="keen-slider__slide number-slide5 ">
          <div className='md:flex'>
            <img className='w-40 h-72' src={pic9} alt="" />
            <img className='w-40 h-72' src={pic10} alt="" />
          </div>
          <h3 className='md:ms-16'>Color correction</h3>
          <p className='text-xs ms-2 mb-10'>
            Sky replacement grass added and color correction before and after
          </p>
        </div>

      </div>
    </div>
  );
};

export default OurServices;