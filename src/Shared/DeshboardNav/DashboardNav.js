import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const DashboardNav = () => {
        const {user,userInfo ,loading}=useContext(AuthContext);
        
        
        
       
    return (
        <div className='bg-orange-600 text-white h-screen  pt-10'>
            {
                loading==true?<p>Loading.....</p>:<></>
            }
            {/* user */}
            {
              userInfo?.map(u=><>
               {
               u?.role==="user"?<ul className='mb-10 '>
                <li className='text-xl px-10 hover:bg-blue-600 active:bg-red-700'><Link to="/deshboard">Order Management</Link></li>
                <li className='text-xl mt-2 px-10 hover:bg-blue-600 active:bg-red-700'><Link to="/deshboard/profile">Profile Management</Link></li>
                <li className='text-xl mt-2 px-10  hover:bg-blue-600 active:bg-red-700'><Link>Notifications</Link></li>
                <li className='text-xl mt-2 px-10 hover:bg-blue-600 active:bg-red-700'><Link>File Upload and Download</Link></li>
                <li className='text-xl mt-2 px-10 hover:bg-blue-600 active:bg-red-700'><Link to="/deshboard/payment-history">Payment History</Link></li>
                </ul> :<></>
               }
              </>) 
            }
            {/* admin */}
            {
            userInfo?.map(u=><>
               {
                u?.role =="admin" ?<ul className='mb-10 '>
                <li className='text-xl px-10 hover:bg-blue-600 active:bg-red-700'><Link>Order Management</Link></li>
                <li className='text-xl mt-2 px-10 hover:bg-blue-600 active:bg-red-700'><Link>Profile Management</Link></li>
                <li className='text-xl mt-2 px-10  hover:bg-blue-600 active:bg-red-700'><Link>Notifications</Link></li>
                <li className='text-xl mt-2 px-10 hover:bg-blue-600 active:bg-red-700'><Link>File Upload and Download</Link></li>
                <li className='text-xl mt-2 px-10 hover:bg-blue-600 active:bg-red-700'><Link>Payment History</Link></li>
                </ul> :<></>
            }
             </>) 
            }
            {/* management */}
            {
                userInfo?.map(u=><>
                    {
                u?.role==="management"?<ul className='mb-10 '>
                <li className='text-xl px-10 hover:bg-blue-600 active:bg-red-700'><Link>Order Management</Link></li>
                <li className='text-xl mt-2 px-10 hover:bg-blue-600 active:bg-red-700'><Link>File Handling</Link></li>
                <li className='text-xl mt-2 px-10  hover:bg-blue-600 active:bg-red-700'><Link>Profile Management</Link></li>
                <li disabled className='text-xl mt-2 px-10 hover:bg-blue-600 active:bg-red-700'><Link>File Upload and Download</Link></li>
               
                </ul> :<></>
            }
             </>) 
            }
                <hr />
                <div className='mt-10 ps-10'>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to={`/order/${user?.email}`}>Add new Item</Link></li>
                    </ul>
                </div>
        </div>
    );
};

export default DashboardNav;