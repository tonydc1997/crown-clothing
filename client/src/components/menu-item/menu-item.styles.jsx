import styled from 'styled-components';

export const MenuItemContainer = styled.div`
  min-width: 30%;
  height: ${({ size }) => (size ? '380px' : '240px')};
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  border-radius: 4px;
  margin: 0 7.5px 15px;
  overflow: hidden;

  &:hover {
    cursor: pointer;

    & .background-image {
      transform: scale(1.125);
      transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }

    & .content {
      transition: all ease-in-out 0.25s;
      opacity: 0.9;
    }
  }

  &:first-child {
    margin-right: 7.5px;
  }

  &:last-child {
    margin-left: 7.5px;
  }

  @media screen and (max-width: 800px) {
    height: 300px;
    width: 46%;
  }
`;

export const BackgroundImage = styled.div`
  background-position: center;
  background-size: cover;
  height: 100%;
  width: 100%;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

export const ContentContainer = styled.div`
  height: 90px;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  border-radius: 4px;
  background-color: white;
  opacity: 0.65;
  position: absolute;
`;

export const Title = styled.h1`
  font-weight: bold;
  margin-bottom: 6px;
  font-size: 22px;
  color: hsl(209, 34%, 30%);
`;

export const SubTitle = styled.span`
  color: hsl(211, 39%, 23%);
  font-weight: light;
  font-size: 16px;
`;
