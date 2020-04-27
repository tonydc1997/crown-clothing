import styled, { css } from 'styled-components';

const textContainerStyles = css`
  width: 23%;
  font-weight: 700;
  font-size: 20px;
  color: #243b53;
`;

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 2px solid hsl(210, 23%, 95%);
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
`;

export const ImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const TextContainer = styled.span`
  ${textContainerStyles}
`;

export const QuantityContainer = styled.span`
  display: flex;

  span {
    margin: 0 10px;
  }

  ${textContainerStyles}
`;

export const Arrow = styled.div`
  cursor: pointer;
  color: #cdd9e5;
`;

export const RemoveButton = styled.div`
  padding-left: 12px;
  cursor: pointer;
  color: #829ab1;
`;
