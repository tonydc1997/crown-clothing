import styled from 'styled-components';

export const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 28vw;

  span {
    color: #486581;
    font-size: 18px;
  }

  @media screen and (max-width: 520px) {
    align-items: left;
    width: 100%;
  }

  @media screen and (min-width: 521px) and (max-width: 800px) {
    width: 80%;
  }
`;

export const Title = styled.h2`
  margin: 20px 0;
  color: #243b53;
  font-size: 28px;
`;
