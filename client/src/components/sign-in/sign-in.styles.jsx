import styled from 'styled-components';

export const SignInContainer = styled.div`
  background-color: white;
  border-radius: 4px;
  border: 1px solid hsl(212, 33%, 89%);
  box-shadow: 0 3px 6px hsla(0, 0%, 0%, 0.1), 0 10px 20px hsla(0, 0%, 0%, 0.15);
  display: flex;
  flex-direction: column;
  margin: 3rem auto;
  padding: 32px 48px;
  width: 448px;
  margin-bottom: 14rem;

  @media screen and (max-width: 520px) {
    width: 90%;
  }

  @media screen and (min-width: 521px) and (max-width: 800px) {
    width: 80%;
  }
`;

export const Title = styled.h2`
  color: hsl(211, 39%, 23%);
  font-size: 28px;
  margin: 0;
  align-self: center;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;

  button {
    margin-bottom: 16px;
  }
`;
