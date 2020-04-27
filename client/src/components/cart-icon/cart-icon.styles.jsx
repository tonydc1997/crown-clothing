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
  position: absolute;
  font-size: 10px;
  font-weight: bold;
  bottom: 12px;
`;
