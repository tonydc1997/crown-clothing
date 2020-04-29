import styled from 'styled-components';

export const CollectionItemContainer = styled.div`
  width: 20vw;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;
  margin-bottom: 80px;

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

  @media screen and (max-width: 800px) {
    width: 45vw;

    button {
      display: block;
      opacity: 0.9;
      min-width: unset;
      padding: 0 10px;
    }

    &:hover {
      .image {
        opacity: unset;
      }
      button {
        opacity: unset;
      }
    }
  }
`;

export const BackgroundImage = styled.div`
  width: 100%;
  height: 95%;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  background-size: cover;
  background-position: center;
  border-radius: 4px;
  margin-bottom: 5px;
`;

export const CollectionFooterContainer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  flex-direction: column;
  align-items: left;
  font-size: 18px;
`;

export const NameContainer = styled.span`
  width: 90%;
  color: hsl(210, 22%, 45%);
  font-weight: 600;
  font-size: 18px;
  margin-bottom: 4px;
`;

export const PriceContainer = styled.span`
  width: 10%;
  color: hsl(209, 34%, 30%);
  font-weight: 700;
  font-size: 20px;
`;
