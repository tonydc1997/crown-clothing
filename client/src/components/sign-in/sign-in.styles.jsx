import styled from 'styled-components';

export const SignInContainer = styled.div`
  background-color: white;
  border-radius: 4px;
  border: 1px solid hsl(212, 33%, 89%);
  /* box-shadow: 0 4px 6px hsla(0, 0%, 0% 0.7), 0 15px 35px hsla(0, 0%, 0% 0.2); */
  display: flex;
  flex-direction: column;
  padding: 32px 48px;
  width: 448px;

  @media screen and (max-width: 520px) {
    width: 100%;
  }

  @media screen and (min-width: 521px) and (max-width: 800px) {
    width: 80%;
    margin-left: 4rem;
  }
`;

export const Title = styled.h2`
  color: hsl(211, 39%, 23%);
  font-size: 28px;
  margin-top: 17px;
  align-self: center;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;

  button {
    margin-bottom: 16px;
  }
`;
