import * as S from './Navbar.styled';
import boardsLogo from '../../images/boards-text.png';
import LogoutBtn from '../LogoutBtn';

const Navbar = ({fromLoc}) => {
  return (
    <S.Navbar>
      <S.Wrapper>
        <S.LogoLink to={fromLoc === 'landing-page' ? '/' : '/home'}>
          <S.Img src={boardsLogo} alt='logo' />
        </S.LogoLink>
        {fromLoc === 'landing-page' && <S.Link to='/auth'>Sign in</S.Link>}
        {fromLoc === 'home-page' && <LogoutBtn />}
      </S.Wrapper>
    </S.Navbar>
  )
}

export default Navbar
