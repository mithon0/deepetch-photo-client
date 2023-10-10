import React from 'react';

const PaymentCard = ({data,index}) => {
    const {OrderData,amount,transactionId}=data;
   
    return (
        <div className='border f'>
            <h1 className='text-center text-2xl font-semibold'>{index+1}. Payment amount-{amount}$</h1>
            <p>Transaction Id :{transactionId} </p>
            <h2 className='underline font-bold'>Payment Products:</h2>
            <div>
                {
                    OrderData.map((data,i)=><div className='p-3'>
                        <h1 className='text-xl font-bold'>{i+1}. {data.item}</h1>
                        <div className='flex justify-between items-center'>
                            <h3>Align:<span>{data.Object_alignment}</span></h3>
                            <h3>DPI:{data.DPI}</h3>
                            <h3>BG:{data.background}</h3>
                        </div>
                        <div className='flex justify-between items-center'>
                            <h3>Formate:{data.file_formate}</h3>
                            <h3>Path:{data.path}</h3>
                            <h3>Margin:{data.margin}</h3>
                        </div>
                        <p>Short Massage: {data.massage}</p>
                    </div>)
                }
            </div>
        </div>
    );
};

export default PaymentCard;