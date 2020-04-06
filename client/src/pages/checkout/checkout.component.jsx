import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';
import {
  selectCartItems,
  selectCartTotal,
} from '../../redux/cart/cart.selectors';
import {
  CheckoutPageContainer,
  CheckoutHeader,
  HeaderBlock,
  Total,
  TotalPrice,
  TestCardWarning,
} from './checkout.styles';

const CheckoutPage = ({ cartItems, total }) => (
  <CheckoutPageContainer>
    <CheckoutHeader>
      <HeaderBlock>
        <span>Product</span>
      </HeaderBlock>
      <HeaderBlock>
        <span>Description</span>
      </HeaderBlock>
      <HeaderBlock>
        <span>Quantity</span>
      </HeaderBlock>
      <HeaderBlock>
        <span>Price</span>
      </HeaderBlock>
      <HeaderBlock>
        <span>Remove</span>
      </HeaderBlock>
    </CheckoutHeader>
    {cartItems.map(cartItem => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}
    <Total>
      TOTAL: <TotalPrice>${total}</TotalPrice>
    </Total>
    <TestCardWarning>
      *Please use the following credit card for test payments*
      <br />
      4242 4242 4242 4242 - Exp: 01/30 - CVC: 123
    </TestCardWarning>
    <StripeCheckoutButton price={total} />
  </CheckoutPageContainer>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
