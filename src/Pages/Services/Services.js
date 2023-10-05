import React, { useState } from 'react';
import { motion } from "framer-motion";
import { HashLink as Link } from 'react-router-hash-link';
const Services = () => {
    const [option, setOption] = useState(false)
    console.log(option)
    return (
        <div>
            <motion.div
                initial={{ opacity: 0, scale: 0.75 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
            >
                <nav className='bg-orange-600 w-full f2 text-white '>
                    <ul className='flex md:gap-7 gap-2 md:ms-10 mx-2'>
                        <li className='py-2 hover:bg-blue-700 active:bg-black '><Link to="#mannequin">Ghost Mannequin</Link> </li>
                        <li className='py-2  hover:bg-blue-700 active:bg-black ' onMouseEnter={() => { setOption(true) }} onMouseLeave={() => { setOption(false) }}><Link>Background removal</Link> </li>
                        <li className='py-2  hover:bg-blue-700 active:bg-black '><Link to="#estate">real estate retouch</Link> </li>
                        <li className='py-2  hover:bg-blue-700 active:bg-black '><Link to="#photo">Product photo retouch</Link> </li>
                        <li className='py-2  hover:bg-blue-700 active:bg-black '><Link to="#manipulation">photo manipulation</Link> </li>


                    </ul>

                </nav>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, scale: 1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
            >
                <div className='f2 absolute bg-blue-800 text-white w-40 md:ms-40 ms-28 text-center ' >
                    {
                        option ? <motion.div
                            initial={{ opacity: 0, scale: 1 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1 }}
                        ><ul onMouseEnter={() => { setOption(true) }} onMouseLeave={() => { setOption(false) }}>
                                <li className=' hover:bg-orange-600 active:bg-black '><Link>-From Athlet</Link></li>
                                <li className=' hover:bg-orange-600 active:bg-black '><Link>-From product</Link></li>
                                <li className=' hover:bg-orange-600 active:bg-black '><Link>-From furniture</Link></li>
                                <li className=' hover:bg-orange-600 active:bg-black '><Link>-From furniture</Link></li>
                                <li className=' hover:bg-orange-600 active:bg-black '><Link>-From bike & automobiles</Link></li>
                            </ul></motion.div> : <></>
                    }

                </div>
            </motion.div>
        </div>
    );
};

export default Services;