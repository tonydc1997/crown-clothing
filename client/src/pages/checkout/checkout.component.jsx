import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';
import {
  selectCartItems,
  selectCartTotal,
} from '../../redux/cart/cart.selectors';
import CreditCard from '../../assets/pay.svg';
import Calender from '../../assets/icon-calendar-date.svg';
import SecureLock from '../../assets/icon-lock.svg';
import {
  CheckoutPageContainer,
  Total,
  TotalPrice,
  TestCardWarning,
  TestCardTitle,
  TestCardMessage,
  ButtonContainer,
} from './checkout.styles';

const CheckoutPage = ({ cartItems, total }) => (
  <CheckoutPageContainer>
    {cartItems.map(cartItem => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}
    <Total>
      Your total is <TotalPrice>${total}</TotalPrice>
    </Total>
    <TestCardWarning>
      <TestCardTitle>
        Please use the credit card below when making payments.
      </TestCardTitle>
      <TestCardMessage>
        <img src={CreditCard} alt="Credit Card icon" />
        4242 4242 4242 4242
        <br />
        <img src={Calender} alt="Calender Icon" />
        01/30
        <br />
        <img src={SecureLock} alt="Secure Lock" />
        123
      </TestCardMessage>
    </TestCardWarning>
    <ButtonContainer>
      <StripeCheckoutButton price={total} />
    </ButtonContainer>
  </CheckoutPageContainer>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
