import styled from 'styled-components';

export const SignInContainer = styled.div`
  width: 28vw;
  display: flex;
  flex-direction: column;
  margin-right: 4rem;

  @media screen and (max-width: 520px) {
    align-items: left;
    width: 100%;
    margin: unset;
  }

  @media screen and (min-width: 521px) and (max-width: 800px) {
    width: 80%;
    margin-left: 4rem;
  }
`;

export const Title = styled.h2`
  color: #243b53;
  font-size: 28px;
  margin-top: 17px;
`;

export const Content = styled.span`
  color: #486581;
  font-size: 18px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 1400px) {
    flex-direction: column;

    button {
      margin-bottom: 15px;
    }
  }
`;
