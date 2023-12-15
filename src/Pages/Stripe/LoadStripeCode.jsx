import React from 'react'
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';

const apiKeyStripe = import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY;

const stripePromise = loadStripe(apiKeyStripe)

const LoadStripeCode = () => {

    const options = {
        clientSecret: '{{CLIENT_SECRET}}',
    };

    return (
        <div>
            <Elements stripe={stripePromise} options={options}>
                <CheckoutForm />
            </Elements>
        </div>
    )
}

export default LoadStripeCode