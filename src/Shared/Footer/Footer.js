import React from 'react';

const Footer = () => {
    return (
        <div className='bg-black px-10 text-white py-10 grid md:grid-cols-3 grid-cols-1'>
            <div >
                <h1 className='text-xl font-bold underline'>About</h1>
                <ul className='font-thin mt-5'>
                    <li>How It Works</li>
                    <li>FAQ</li>
                    <li>About Us</li>
                    <li>Testimonials</li>
                </ul>
            </div>
            <div>
                <h1 className='text-xl font-bold underline'>Help</h1>
                <ul className='font-thin mt-5'>
                    <li>Terms & Conditions</li>
                    <li>Content Policy</li>
                    <li>Privacy Policy</li>
                    <li>Contact Us </li>
                </ul>
            </div>
            <div>
                <h1 className='text-xl font-bold underline'>Community </h1>
                <ul className='font-thin mt-5'>
                    <li>Blog</li>
                    <li>Meetups</li>
                    <li>Affiliates</li>
                    <li>Forms</li>
                </ul>
            </div>
        </div>
    );
};

export default Footer;