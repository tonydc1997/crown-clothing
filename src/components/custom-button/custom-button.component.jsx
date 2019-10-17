import React from 'react';
import './custom-button.styles.scss';

const CustomButton = ({ children, type, onClick }) => (
  <button className="custom-button" type={type} onClick={onClick}>
    {children}
  </button>
);

export default CustomButton;
