import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51JPN1OSJaTF4Mwyu7yBJ6v3pdfeRYScdVEKCbfKGHjYvuu1pzRMzPtRQ3d9113RxEoWGSYOkoRIYwvB6XUJpESTJ00KPuZ4kMW';

    const onToken = token => {
        console.log(token)
        alert('Payment Successful')
    }

    return (
        <StripeCheckout
            label='Pay Now'
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            stripeKey={publishableKey}
            panelLabel='Pay Now'
            token={onToken}
        />
    )
}

export default StripeCheckoutButton;