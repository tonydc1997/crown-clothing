import styled, { css } from 'styled-components';

const buttonStyles = css`
  background-image: linear-gradient(
    to top,
    #232323,
    #303030,
    #3d3d3d,
    #4b4b4b,
    #5a5959
  );
  border: 1px solid #2e2e2e;
  color: #e7e7e7;

  &:hover {
    background-image: linear-gradient(
      to top,
      #191919,
      #252525,
      #313131,
      #3e3e3e,
      #4c4c4c
    );
    color: white;
    border: 1px solid black;
  }
`;

const invertedButtonStyles = css`
  background-image: linear-gradient(
    to top,
    #b2b2b2,
    #c4c4c4,
    #d5d5d5,
    #e8e8e8,
    #fafafa
  );
  color: #181818;
  border: 1px solid #d1d1d1;

  &:hover {
    border: 1px solid white;
    background-image: linear-gradient(
      to top,
      #dbdbdb,
      #e4e4e4,
      #ededed,
      #f6f6f6,
      #ffffff
    );
    color: black;
  }
`;

const googleSignInStyles = css`
  background-image: linear-gradient(
    to bottom,
    #4285f4,
    #3f82f1,
    #3c7fee,
    #387deb,
    #357ae8
  );
  border: 1px solid #357ae8;
  color: #f0f0f0;

  &:hover {
    background-image: linear-gradient(
      to bottom,
      #4285f4,
      #3e80eb,
      #3b7ae3,
      #3775da,
      #3370d2
    );
    color: white;
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
  cursor: pointer;
  display: flex;
  font-family: 'Open Sans Condensed';
  font-size: 15px;
  font-weight: bolder;
  height: 50px;
  justify-content: center;
  letter-spacing: 0.5px;
  line-height: 50px;
  min-width: 165px;
  padding: 0 35px;
  text-align: center;
  text-transform: uppercase;
  width: auto;

  ${getButtonStyles}
`;

export default CustomButtonContainer;
