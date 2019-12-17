import styled, { css } from 'styled-components';

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
