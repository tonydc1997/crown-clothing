import styled from 'styled-components';

export const ErrorImageOverlay = styled.div`
  height: 90vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ErrorImageContainer = styled.div`
  display: inline-block;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  background-size: cover;
  background-position: center;
  width: 60vh;
  height: 60vh;

  @media screen and (max-width: 900px) {
    width: 50vh;
    height: 50vh;
  }
`;

export const ErrorImageText = styled.h2`
  font-size: 36px;
  color: hsl(209, 34%, 30%);

  @media screen and (max-width: 900px) {
    font-size: 30px;
    padding: 0 20px;
  }
`;
