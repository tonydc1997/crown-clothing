import styled, { css } from 'styled-components';

const veryDarkGray = 'hsl(209, 61%, 16%)';
const lightGray = 'hsl(210, 36%, 96%)';
const gray = 'hsl(209, 28%, 39%)';
const focusLabelStyles = css`
  top: -24px;
  left: -12px;
  color: ${veryDarkGray};
`;

export const GroupContainer = styled.div`
  position: relative;
  margin: 48px 0;
  input[type='password'] {
    letter-spacing: 0.3em;
  }
`;

export const FormInputContainer = styled.input`
  background: none;
  background-color: ${lightGray};
  color: ${gray};
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: 1px solid ${lightGray};
  border-radius: 4px;
  margin: 25px 0;

  &:focus {
    outline: none;
  }

  &:focus ~ label {
    ${focusLabelStyles};
    font-weight: 700;
  }
`;

export const FormInputLabel = styled.label`
  color: ${gray};
  font-size: 16px;
  font-weight: normal;
  padding-left: 12px;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 300ms ease all;

  &.shrink {
    ${focusLabelStyles};
  }
`;
