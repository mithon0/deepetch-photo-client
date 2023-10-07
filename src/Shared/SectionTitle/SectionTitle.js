import React from 'react';

const SectionTitle = ({heading,subheading}) => {
    console.log(heading,subheading)
    return (
        <div className='mx-auto w-1/3  rounded-full mt-5 mb-5 px-10'>
            <hr />
            <h1 className='text-center text-4xl font-bold'>{heading}</h1>
            <p className='text-center text-slate-600 font-thin'>{subheading}</p>
            <hr />
        </div>
    );
};

export default SectionTitle;