import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../../redux/ducks/auth';
import styled from 'styled-components';

const LogoutBtn = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const logout = async () => {
    await axios.get('http://localhost:8080/auth/logout');
    dispatch(logoutUser());
    history.push('/');
  }

  return (
    <SLogoutBtn onClick={() => logout()}>
      Logout
    </SLogoutBtn>
  )
}

const SLogoutBtn = styled.button`
  padding: 10px 12px;
  margin-left: 8px;
  display: inline-flex;
  align-items: center;
  font-size: 20px;
  color: #fff;
  font-weight: bold;
  text-decoration: none;
  background-color: rgba(0, 118, 101, 0.4);
  border-radius: 32px;
  cursor: pointer;
  transition: 0.2s ease-in-out;

  &:hover {
    background-color: rgba(0, 118, 101, 0.6);
  }
`;

export default LogoutBtn
