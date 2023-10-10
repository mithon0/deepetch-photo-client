import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { useEffect } from 'react';
import "./CheckOut.css"
const CheckoutForm = ({ price }) => {
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useContext(AuthContext)
  const [cardError, setCardError] = useState(null)
  const [clientSecret, setClientSecret] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const [OrderData,setOrderData]=useState([])

  console.log(OrderData)
  useEffect(()=>{
      
    fetch(`https://deepetch-photo-server-p7dkgndlk-mithon0.vercel.app/data/${user?.email}`)
          .then(res=>res.json())
          .then(data=>setOrderData(data))
          
},[user])

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    if (price > 0) {
      fetch("https://deepetch-photo-server-p7dkgndlk-mithon0.vercel.app/create-payment-intent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ price: price }),
      })
        .then((res) => res.json())
        .then((data) => setClientSecret(data.clientSecret));
    }
  }, []);
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return
    }
    const card = elements.getElement(CardElement)
    if (card == null) {
      return
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });

    if (error) {
      console.log('[error]', error);
      setCardError(error.message)
    } else {
      setCardError("")
      // console.log('[PaymentMethod]', paymentMethod);
    }

    const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.displayName || "anonymous",
            email: user?.email || "anonymous"
          }
        }
      }
    )
    if (confirmError) {
      console.log(confirmError)
    }
    setTransactionId(paymentIntent?.id )
    console.log(paymentIntent)
    const payment = {
      email: user.email,
      amount: price,
      quantity: OrderData.length,
      OrderData,
      transactionId: paymentIntent.id
    }
    if (paymentIntent.id ||OrderData) {

      console.log(payment)
      if (payment) {
        fetch("https://deepetch-photo-server-p7dkgndlk-mithon0.vercel.app/payment", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payment),
        })
          .then((res) => res.json())
          .then((data) => console.log(data));
      }

    }


  }
  return (
    <>
      <form className='ms-20' onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        <button className='bg-indigo-800 text-white text-2xl px-5 rounded mt-5' type="submit" disabled={!stripe || !clientSecret}>
          Pay
        </button>
      </form>
      {
        cardError ? <p className='text-xl text-red-700'>{cardError}</p> : <></>
      }
      {
        transactionId ? <p className='text-green-600 text-xl'>Your payment success with TransactionId:{transactionId}</p> : <></>
      }
    </>
  );
};

export default CheckoutForm;