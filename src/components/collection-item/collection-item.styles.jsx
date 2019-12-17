import styled, { css } from 'styled-components';

const styledSpan = css`
  color: #243b53;
  font-size: 20px;
`;

export const CollectionItemContainer = styled.div`
  width: 20vw;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;

  button {
    width: 80%;
    opacity: 0.7;
    position: absolute;
    top: 255px;
    display: none;
  }

  &:hover {
    .image {
      opacity: 0.9;
    }
    button {
      display: flex;
      opacity: 0.85;
    }
  }
`;

export const BackgroundImage = styled.div`
  width: 100%;
  height: 95%;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
`;

export const CollectionFooterContainer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;

export const NameContainer = styled.span`
  width: 90%;
  margin-bottom: 15px;

  ${styledSpan}
`;

export const PriceContainer = styled.span`
  width: 10%;

  ${styledSpan}
`;
