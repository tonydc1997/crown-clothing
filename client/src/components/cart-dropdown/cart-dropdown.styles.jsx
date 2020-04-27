import styled from 'styled-components';

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid hsl(210, 31%, 80%);
  border-radius: 4px;
  box-shadow: 0 4px 6px hsl(0, 0%, 0%, 0.1);
  background-color: white;
  top: 68px;
  right: 56px;
  z-index: 5;

  button {
    margin-top: auto;
  }

  @media screen and (max-width: 800px) {
    right: 24px;
  }
`;

export const CartItemsContainer = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;

export const EmptyMessageContainer = styled.div`
  color: hsl(209, 28%, 39%);
  font-size: 18px;
  margin: 24px auto;
`;
