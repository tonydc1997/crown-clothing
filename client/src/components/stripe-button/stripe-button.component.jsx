import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import CustomButton from '../custom-button/custom-button.component';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_jFdbVW4LoSKQfHDZGvGOjUvU00AgEyFRcT';
  const onToken = token => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token,
      },
    })
      .then(response => {
        alert('Payment successful!');
      })
      .catch(error => {
        console.log('Payment error + ', JSON.parse(error));
        alert(
          'There was an issue with the payment. Please be sure to use the provided credit card.'
        );
      });
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CROWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    >
      <CustomButton type="button">Pay now</CustomButton>
    </StripeCheckout>
  );
};

export default StripeCheckoutButton;
