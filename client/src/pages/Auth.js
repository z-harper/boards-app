import { useState } from 'react';
import styled from 'styled-components';
import SignIn from '../components/SignIn';
import Register from '../components/Register';

const Auth = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  return (
    <SAuthContainer>
      <SAuthWrapper>
        <SHeading>{isSignIn ? 'Hello again!' : 'Hey there and welcome!'}</SHeading>
        <SSubHeading>{isSignIn ? 'Please sign in below' : 'Create an account below'}</SSubHeading>
        {isSignIn && <SignIn />}
        {!isSignIn && <Register />}
        <SChangeFormWrapper>
          <SFollowup>{isSignIn ? 'Need to create an account?' : 'Already have an account?'}&ensp;</SFollowup>
          <SChangeFormBtn onClick={() => setIsSignIn(!isSignIn)}>{isSignIn ? 'Register' : 'Sign in'}</SChangeFormBtn>
        </SChangeFormWrapper>
      </SAuthWrapper>
    </SAuthContainer>
  )
}

const SAuthContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 118, 101, .1);
`;

const SAuthWrapper = styled.div`
  max-width: 500px;
  margin: auto;
  padding: 4px;
  border: 1px solid #004339;
  border-radius: 8px;
  background-color: #fff;
`;

const SHeading = styled.h2`
  margin-top: 1rem;
  text-align: center;
  color: #004339;
`;

const SSubHeading = styled.h4`
  margin: 0.5rem 0 1rem 0;
  text-align: center;
  color: #007665;
`;

const SChangeFormWrapper = styled.div`
  display: flex;
`;

const SFollowup = styled.h5`
  margin: 1rem 0;
  color: #007665;
`;

const SChangeFormBtn = styled.button`
  margin: 0;
  padding: 0;
  color: #007665;
  text-decoration: underline;
  cursor: pointer;
`;

export default Auth
