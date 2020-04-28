import styled from 'styled-components';

export const CartItemContainer = styled.div`
  width: 100%;
  display: flex;
  height: 80px;
  margin-bottom: 15px;
`;

export const CartItemImage = styled.img`
  width: 30%;
  border-radius: 4px;
  box-shadow: 0 1px 3px hsla(0, 0%, 0%, 0.12);
  box-shadow: 0 1px 2px hsla(0, 0%, 0%, 0.24);
`;

export const ItemDetailsContainer = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding-left: 10px;
  padding-bottom: 18px;

  span {
    color: hsl(210, 22%, 49%);
    font-weight: 700;
    font-size: 18px;
  }
`;

export const ItemPrice = styled.p`
  color: hsl(209, 28%, 39%);
  font-weight: 800;
  font-size: 20px;
  padding: 0;
  margin: 0;
`;
