import React from 'react';
import './form-input.styles.scss';

const FormInput = ({ handleChange, name, type, required, label }) => (
  <div className="group">
    <input
      className="form-input"
      onChange={handleChange}
      name={name}
      type={type}
      required={required}
    />
  </div>
);

export default FormInput;
