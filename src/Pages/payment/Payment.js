import { Elements } from '@stripe/react-stripe-js';
import React from 'react';
import { useParams } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';
import { loadStripe } from '@stripe/stripe-js';
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';
import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const stripePromise =loadStripe("pk_test_51NzKYyBYwjCb0La5S5YdjJOS4hkgS5bAsHX1fIXJFhNEivuIHaKnRpCL3YhiqQLSZIG87OdDiAld7hXQOgegTkVD00tMYPYSep")
const Payment = () => {
    const totalPrice = useParams()
    console.log(totalPrice.price)
    const {loading}=useContext(AuthContext);
    
    return (
        <div>
            <SectionTitle
            heading={"Payment"}
            subheading={"Please Process your payment"}
            ></SectionTitle>
            <div className='w-1/2'>
            <Elements stripe={stripePromise}>
                <CheckoutForm 
                price={totalPrice.price}
                />
            </Elements>
            </div>
        </div>
    );
};

export default Payment;