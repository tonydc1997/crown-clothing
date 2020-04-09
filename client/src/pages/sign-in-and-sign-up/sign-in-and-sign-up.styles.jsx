import styled from 'styled-components';

const SignInAndSignUpContainer = styled.div`
  padding: 25px;
  width: 60vw;
  display: flex;
  justify-content: space-between;
  margin: 2rem auto;

  @media screen and (max-width: 800px) {
    flex-direction: column;
    width: unset;
    align-items: center;
    > *:first-child {
      margin-bottom: 50px;
    }
  }
`;

export default SignInAndSignUpContainer;
