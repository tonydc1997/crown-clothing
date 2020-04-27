import styled from 'styled-components';

export const CheckoutPageContainer = styled.div`
  width: 55%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto;

  button {
    margin-left: auto;
    margin-top: 50px;
  }

  @media screen and (max-width: 800px) {
    width: 90%;
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

  @media screen and (max-width: 800px) {
    width: 22%;

    &:last-child {
      width: 12%;
    }
  }
`;

export const Total = styled.div`
  margin-top: 30px;
  margin-left: auto;
  font-size: 24px;
  font-weight: 600;
  color: hsl(210, 22%, 49%);
`;

export const TotalPrice = styled.span`
  font-size: 30px;
  font-weight: 700;
  color: hsl(211, 39%, 23%);
`;

export const TestCardWarning = styled.div`
  text-align: center;
  margin-top: 40px;
  font-size: 24px;
  color: #eb1313;
`;
