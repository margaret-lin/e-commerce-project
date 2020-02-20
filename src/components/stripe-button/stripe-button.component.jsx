import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_1rPtZpUiWRuGzyMPMJNNPleu00CR7xOPKl';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    };

    return (
        <StripeCheckout
            label='Pay now'
            name='Maga Clothing GmbH'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

// default test credit card from Stripe
// 4242 4242 4242 4242 - Exp: 01/22 - CW: 123

export default StripeCheckoutButton;
