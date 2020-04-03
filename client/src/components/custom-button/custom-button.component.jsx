import React from 'react';
import CustomButtonContainer from './custom-button.styles';

const CustomButton = ({
  children,
  type,
  onClick,
  isGoogleSignIn,
  inverted,
}) => (
  <CustomButtonContainer
    type={type}
    onClick={onClick}
    isGoogleSignIn={isGoogleSignIn}
    inverted={inverted}
  >
    {children}
  </CustomButtonContainer>
);

export default CustomButton;
