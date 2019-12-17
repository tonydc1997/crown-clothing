import styled, { css } from 'styled-components';

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
  if (props.googleSignIn) {
    return googleSignInStyles;
  }
  return props.inverted ? invertedButtonStyles : buttonStyles;
};

export const CustomButtonContainer = styled.button`
  text-align: center;
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px;
  font-size: 15px;
  background-image: linear-gradient(
    to top,
    #232323,
    #303030,
    #3d3d3d,
    #4b4b4b,
    #5a5959
  );
  color: #e7e7e7;
  text-transform: uppercase;
  font-family: 'Open Sans Condensed';
  font-weight: bolder;
  border: 1px solid #2e2e2e;
  cursor: pointer;
  display: flex;
  justify-content: center;

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
