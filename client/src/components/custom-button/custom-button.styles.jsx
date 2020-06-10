import styled, { css } from 'styled-components';

const buttonStyles = css`
  background-color: hsl(211, 39%, 23%);
  border: 1px solid #2e2e2e;
  color: hsl(184, 80%, 80%);

  &:hover {
  }
`;

const invertedButtonStyles = css`
  background-image: linear-gradient(
    to bottom,
    #fcfcfd,
    #fafafc,
    #f7f8fb,
    #f4f7f9,
    #f1f5f8
  );
  color: hsl(209, 34%, 30%);
  border: 1px solid #d1d1d1;

  &:hover {
    background-color: white;
  }
`;

const googleSignInStyles = css`
  color: hsl(202, 83%, 41%);
  border: none;
  background: none;
  box-shadow: none;

  &:hover {
    color: hsl(203, 87%, 34%);
  }
`;

const getButtonStyles = props => {
  if (props.isGoogleSignIn) {
    return googleSignInStyles;
  }
  return props.inverted ? invertedButtonStyles : buttonStyles;
};

const CustomButtonContainer = styled.button`
  border-radius: 4px;
  box-shadow: 0 1px 3px hsla(0, 0%, 0%, 0.12), 0 1px 2px hsla(0, 0%, 0%, 0.24);
  cursor: pointer;
  display: flex;
  font-size: 15px;
  font-weight: bolder;
  height: 50px;
  justify-content: center;
  letter-spacing: 0.5px;
  line-height: 50px;
  min-width: 165px;
  padding: 0 35px;
  text-align: center;
  width: auto;

  ${getButtonStyles}
`;

export default CustomButtonContainer;
