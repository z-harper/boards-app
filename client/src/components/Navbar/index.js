import * as S from './Navbar.styled';
import boardsLogo from '../../images/boards-text.png';

const Navbar = () => {
  return (
    <S.Navbar>
      <S.Wrapper>
        <S.LogoLink to='/'>
          <S.Img src={boardsLogo} alt='logo' />
        </S.LogoLink>
        <S.Link to='/auth'>Sign in</S.Link>
      </S.Wrapper>
    </S.Navbar>
  )
}

export default Navbar
