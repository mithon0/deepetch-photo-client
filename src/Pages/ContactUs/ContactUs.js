import React from 'react';

const ContactUs = () => {
    return (
        <div>
            <img className='w-screen' src="https://images.unsplash.com/photo-1637855318550-28872c693b08?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1631&q=80" alt="" />
            <div className='flex justify-center w-1/2 absolute top-64 left-80 py-10'>
                <form className=' w-full'>
                    <h1 className='text-white text-center text-3xl font-bold'>Contact With Us</h1>
                    <div className=''>
                        <input  className='text-black w-full my-5 bg-white px-2 py-1' placeholder='Your name' type="text" />
                    </div>
                    <div>
                        <input className='text-black w-full bg-white px-2 py-1'  placeholder='Your Email' type="email" />
                    </div>
                    <div>
                        <input className='text-black w-full my-5 h-28 bg-white px-2 py-1'  placeholder='Your massage' type="text" />
                    </div>
                    <div>
                        <button className='w-full bg-orange-600 text-white font-bold text-2xl'>Send</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactUs;