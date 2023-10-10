import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { useEffect } from 'react';
import PaymentCard from './PaymentCard';

const PaymentHistory = () => {
    const [paymentInfo,setPaymentInfo]=useState([])
    const {user,loading}=useContext(AuthContext)
    useEffect(()=>{
        fetch(`https://deepetch-photo-server-p7dkgndlk-mithon0.vercel.app/payments/${user?.email}`)
                  .then(res=>res.json())
                  .then(data=>setPaymentInfo(data))
    },[paymentInfo])

    console.log(paymentInfo)
    return (
        <div className='grid md:grid-cols-2 grid-cols-1'>
            {
                loading==true?<p>Loading.....</p>:<></>
            }
            {
                paymentInfo.map((data,i)=><div>
                    <PaymentCard
                    key={data._id}
                    data={data}
                    index={i}
                    ></PaymentCard>
                </div>)
            }
        </div>
    );
};

export default PaymentHistory;