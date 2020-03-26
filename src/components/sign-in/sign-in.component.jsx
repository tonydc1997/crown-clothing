import React, { useState } from 'react';
import { connect } from 'react-redux';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';
import {
  googleSignInStart,
  emailSignInStart,
} from '../../redux/user/user.actions';
import {
  SignInContainer,
  Title,
  Content,
  ButtonsContainer,
} from './sign-in.styles';

const SignIn = ({emailSignInStart}) =>  {
  const [userCredentials, setCredentials] = useState({ email: '', password: '' })
  const handleSubmit = async event => {
    event.preventDefault();
    const { email, password } = userCredentials;

    emailSignInStart(email, password);
  };

  const handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { email, password } = this.state;
    const { googleSignInStart } = this.props;
    return (
      <SignInContainer className="sign-in">
        <Title className="title">I already have an account</Title>
        <Content>Sign in with your email and password</Content>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            value={email}
            handleChange={this.handleChange}
            label="Email"
            required
          />
          <FormInput
            name="password"
            type="password"
            value={password}
            handleChange={this.handleChange}
            label="Password"
            required
          />
          <ButtonsContainer>
            <CustomButton type="submit" value="Submit Form">
              Sign In
            </CustomButton>
            <CustomButton
              type="button"
              onClick={googleSignInStart}
              isGoogleSignIn
            >
              {''}
              Sign in with Google {''}
            </CustomButton>
          </ButtonsContainer>
        </form>
      </SignInContainer>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password })),
});

export default connect(null, mapDispatchToProps)(SignIn);
