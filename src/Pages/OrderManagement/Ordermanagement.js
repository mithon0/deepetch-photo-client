import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { Link } from 'react-router-dom';

const Ordermanagement = () => {
    const [orderData,setOrderData]=useState([]);
    const {user,userInfo,loading}=useContext(AuthContext)
    

    
    useEffect(()=>{
      

        
  fetch(`https://deepetch-photo-server-p7dkgndlk-mithon0.vercel.app/data/${user?.email}`)
        .then(res=>res.json())
        .then(data=>setOrderData(data))
        
        
    },[])
    


    const filteredData =orderData.filter((f)=>{
        if(f?.trailNumber<0){
            return f;
        }
    })
    // calculator //per photo 5$

    const totalPrice =filteredData?.length*5
    // console.log(totalPrice)

    const deleteHandler =(id)=>{
            console.log(id)
            fetch(`https://deepetch-photo-server-p7dkgndlk-mithon0.vercel.app/data/${id}`,{
                method:"DELETE"
            })
            .then(res=>res.json())
            .then(data=>console.log(data))
    }
    console.log(loading)
   
    return (
        <div className='mx-2'>
            {
                loading==true?<p>Loading.....</p>:<></>
            }
            <h1 className=' text-center uppercase text-2xl'>{userInfo[0]?.role} Order Management-dashboard</h1>
            {/* user */}
            <div className='grid grid-cols-3'>
            <div className='grid grid-cols-2 col-span-2'>
                   {
                    orderData?.map((d,i)=><div className='border-2 p-2 rounded bg-blue-200'>
                    <p className='text-center font-semibold '>Order number {i+1}</p>
                    <h4 className='font-bold'>Details:</h4>
                   <div className='flex justify-between mx-4'>
                   <h3 className='font-bold'>Item: <span className=' font-thin'>{d.item}</span></h3>
                    <h3 className='font-bold'>Formate: <span className='font-thin'>{d.file_formate}</span></h3>
                   </div>
                   <div className='flex justify-between mx-4'>
                   <h3 className='font-bold'>margin: <span className='font-thin'>{d.margin}</span></h3>
                    <h3 className='font-bold'>Path: <span className='font-thin'>{d.path}</span></h3>
                   </div>
                   <div className='flex justify-between mx-4'>
                   <h3 className='font-bold'>background: <span className='font-thin'>{d.background}</span></h3>
                   
                   </div>
                   <div className='flex justify-between mx-4'>
                   <h3 className='font-bold'>DPI: <span className='font-thin'>{d.DPI}</span></h3>
                   <h3 className='font-bold'>Alignment: <span className='font-thin'>{d.Object_alignment}</span></h3>
                   </div>
                   <div>
                    <h2 className='font-bold'>Email: <span className='font-thin'>{d.email}</span></h2>
                   </div>
                   <div>
                    <h2 className='font-bold'>Massage: <span className='font-thin'>{d.massage}</span></h2>
                   </div>
                   <div>
                    <h2 className='font-bold'>Link: <span className='font-thin'>{d.PhotoURL}</span></h2>
                   </div>
                        <div className='mt-5'>
                            <button className='w-full bg-orange-500 text-white'>
                                {
                                    d.trailNumber>=0?<Link>Free Trail</Link>:<Link to="/deshboard/payment">5$</Link>
                                }
                            </button>
                            <button onClick={()=>deleteHandler(d._id)} className='w-full bg-red-800 mt-2 text-white'>Delete</button>
                        </div>
                </div>)
                }
                   
                    
            </div>
            <div className='bg-blue-900 text-white px-2 pt-10'>
                        <h1 className='text-2xl'>Total product For pay-{filteredData?.length}</h1>
                        <h2 className='font-bold'>Total Price:{totalPrice}$</h2>
                        <button className='p=2 bg-orange-700 w-full'><Link to={`/deshboard/payment/${totalPrice}`}>Payment</Link> </button>
            </div>
            </div>
            <div>
          
            </div>
        </div>
    );
};

export default Ordermanagement;