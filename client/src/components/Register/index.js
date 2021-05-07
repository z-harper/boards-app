import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signInUser } from '../../redux/ducks/auth';
import axios from 'axios';
import ReactTooltip from "react-tooltip";
import { FaRegQuestionCircle } from 'react-icons/fa';
import * as S from './Register.styled';

const INITIAL_STATE = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  passwordVerify: '',
}

const Register = () => {
  const [register, setRegister] = useState(INITIAL_STATE);
  const history = useHistory();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    setRegister({...register, [key]:value});
  }

  const registerUser = async () => {
    try {
      await axios.post('http://localhost:8080/auth/register', register);
      const user = await axios.get('http://localhost:8080/user/get-user', {
        params: {
          email: register.email
        }
      });
      dispatch(signInUser(user.data));
      history.push('/home');  // returns us to home page
    } catch (err) {
      console.error(err);
      window.alert(err.response.data.errorMessage);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    registerUser();
    setRegister(INITIAL_STATE);
  }

  return (
    <S.Register>
      <S.Fieldset>
        <S.Form>
          <S.Legend>Register a new Account</S.Legend>
          <S.FormControl>
            <S.Label htmlFor='firstName'>First Name:</S.Label>
            <S.Input type='text' name='firstName' id='firstName' aria-label='First Name' placeholder='First Name' value={register.firstName} onChange={handleChange} />
          </S.FormControl>
          <S.FormControl>
            <S.Label htmlFor='lastName'>Last Name:</S.Label>
            <S.Input type='text' name='lastName' id='lastName' aria-label='Last Name' placeholder='Last Name' value={register.lastName} onChange={handleChange} />
          </S.FormControl>
          <S.FormControl>
            <S.Label htmlFor='email'>Email:</S.Label>
            <S.Input type='email' name='email' id='email' aria-label='Email' placeholder='Email' value={register.email} onChange={handleChange} />
          </S.FormControl>
          <S.FormControl>
            <S.Label htmlFor='pw'>Password:<S.PassInfo data-tip data-for='pwTip'><FaRegQuestionCircle style={{color: '#00a991'}} /></S.PassInfo></S.Label>
            <S.Input type='password' name='password' id='password' aria-label='Password' placeholder='Password' value={register.password} onChange={handleChange} />
          </S.FormControl>
          <S.FormControl>
            <S.Label htmlFor='pw-verify'>Verify Password:</S.Label>
            <S.Input type='password' name='passwordVerify' id='passwordVerify' aria-label='Verify Password' placeholder='Verify Password' value={register.passwordVerify} onChange={handleChange} />
          </S.FormControl>
          <S.SubmitButton type='submit' onClick={handleSubmit}>Register</S.SubmitButton>
          <ReactTooltip id='pwTip' place='top' effect='solid'>
            Password requirements:<br /><br />
            1. Between 8 - 32 characters <br />
            2. Contain at least 1 uppercase letter <br />
            3. Contain at least 1 lowercase letter <br />
            4. Contain at least 1 number <br />
            5. Contain at least 1 special character <br />
          </ReactTooltip>
        </S.Form>
      </S.Fieldset>
    </S.Register>
  )
}

export default Register
