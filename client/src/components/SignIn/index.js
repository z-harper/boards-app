import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import * as S from './SignIn.styled';

const SignIn = () => {
  const [signIn, setSignIn] = useState({email: '', password: '',})
  const history = useHistory();
  //const {getLoggedIn} = useContext(AuthContext);

  const handleChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    setSignIn({...signIn, [key]:value})
  }

  const signInUser = async () => {
    try {
      //await axios.post('http://localhost:5000/auth/sign-in', signIn);
      //await getLoggedIn();
      history.push('/home');
    } catch (err) {
      console.error(err);
      window.alert(err.response.data.errorMessage);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    signInUser();
    setSignIn({email: '', password: '',})
  }

  return (
    <S.SignIn>
      <S.Fieldset>
        <S.Form>
          <S.Legend>Sign in</S.Legend>
          <S.FormControl>
            <S.Label htmlFor='email'>Email:</S.Label>
            <S.Input type='email' name='email' id='email' aria-label='Email' placeholder='Email' value={signIn.email} onChange={handleChange} />
          </S.FormControl>
          <S.FormControl>
            <S.Label htmlFor='pw'>Password:</S.Label>
            <S.Input type='password' name='password' id='password' aria-label='Password' placeholder='Password' value={signIn.password} onChange={handleChange} />
          </S.FormControl>
          <S.SubmitButton type='submit' onClick={handleSubmit}>Sign in</S.SubmitButton>
        </S.Form>
      </S.Fieldset>
    </S.SignIn>
  )
}

export default SignIn
