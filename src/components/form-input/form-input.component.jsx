import React from 'react';
import { GroupContainer, FormInput, FormInputLabel } from './form-input.styles';

const FormInput = ({ handleChange, label, ...otherProps }) => (
  <GroupContainer>
    <FormInput onChange={handleChange} {...otherProps} />
    {label ? (
      <FormInputLabel className={otherProps.value.length ? 'shrink' : ''}>
        {label}
      </FormInputLabel>
    ) : null}
  </GroupContainer>
);

export default FormInput;
