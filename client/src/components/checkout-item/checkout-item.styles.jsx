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
  border-top: 2px solid hsl(210, 23%, 95%);
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
`;

export const ImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;

  img {
    border-radius: 6px;
    box-shadow: 0 1px 3px hsla(0, 0%, 0%, 0.12), 0 1px 2px hsla(0, 0%, 0%, 0.24);
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
  color: hsl(211, 27%, 70%);
`;

export const RemoveButton = styled.div`
  padding-left: 12px;
  cursor: pointer;
  color: hsl(210, 22%, 49%);
`;
