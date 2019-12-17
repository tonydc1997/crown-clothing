import styled from 'styled-components';

export const CollectionItemContainer = styled.div`
  width: 20vw;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;

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
  backgroundimage: ${({ imageUrl }) => `url(${imageUrl})`};
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
