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
  background-color: hsl(360, 100%, 95%);
  border-left: 6px solid hsl(360, 100%, 80%);
  border-radius: 6px;
  margin-top: 40px;
  padding: 16px 0 16px 16px;
  width: 100%;
`;

export const TestCardTitle = styled.p`
  color: hsl(356, 75%, 53%);
  font-size: 20px;
  font-weight: 700;
  padding: 0;
  margin: 0 0 18px;

  @media screen and (max-width: 900px) {
    font-size: 18px;
  }
`;

export const TestCardMessage = styled.span`
  color: hsl(360, 83%, 65%);
  font-size: 20px;
  font-weight: 600;
  padding-bottom: 24px;

  img {
    width: 32px;
    height: 32px;

    margin-right: 20px;
    margin-bottom: -4px;
  }

  @media screen and (max-width: 900px) {
    font-size: 18px;
  }
`;
