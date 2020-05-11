import styled from 'styled-components';

export const CartIconContainer = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-right: 62px;
  margin-bottom: 6px;
  color: hsl(209, 34%, 30%);

  .shopping-icon {
    width: 24px;
    height: 24px;
  }

  @media screen and (max-width: 800px) {
    margin-right: 6px;
  }
`;

export const ItemCountContainer = styled.span`
  color: hsl(209, 34%, 30%);
  position: absolute;
  font-size: 12px;
  font-weight: bold;
  bottom: 10px;
`;
