import styled from 'styled-components';

export const CheckoutPageContainer = styled.div`
  width: 55%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;

  button {
    margin-left: auto;
    margin-top: 50px;
  }
`;

export const CheckoutHeader = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid hsl(210, 23%, 95%);
`;

export const HeaderBlock = styled.div`
  color: #102a43;
  font-size: 18px;
  text-transform: capitalize;
  width: 23%;

  &:last-child {
    width: 8%;
  }
`;

export const Total = styled.div`
  margin-top: 30px;
  margin-left: auto;
  font-size: 36px;
  color: #829ab1;
`;

export const TotolPrice = styled.span`
  font-size: 48px;
  font-weight: 700;
  color: #243b53;
`;

export const TestCardWarning = styled.div`
  text-align: center;
  margin-top: 40px;
  font-size: 24px;
  color: #eb1313;
`;
