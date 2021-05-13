import { useSelector } from 'react-redux';
import * as S from './HomeHero.styled';
import { data } from './HomeHero.data';


const HomeHero = () => {
  const currentUser = useSelector(state => state.user);

  return (
    <S.HomeHero>
      <S.Wrapper>
        <S.Left>
          {currentUser.imgUrl 
            ? <S.ImgWrapper>
                <S.Img src={currentUser.imgUrl} alt='profile img failed to load' />
              </S.ImgWrapper>
            : <S.UploadImgLink to={data.profile.linkTo}>
                <S.IconWrapper>
                  {data.profile.uploadIcon}
                </S.IconWrapper>
                <S.UploadImgText>{data.profile.uploadText}</S.UploadImgText>
              </S.UploadImgLink>
          }
          <S.EditProfileLink to={data.profile.linkTo}>Edit Profile</S.EditProfileLink>
        </S.Left>
        <S.Right>
          <S.Greeting>hello, {currentUser?.firstName}</S.Greeting>
          <S.LinksContainer>
          {data.links.map(navLink => {
            return (
              <S.LinkItem key={navLink.linkTo}>
                <S.Link to={navLink.linkTo}>
                  <S.IconWrapper>{navLink.icon}</S.IconWrapper>
                  {navLink.displayAs}
                </S.Link>
              </S.LinkItem>
            )
          })}
          </S.LinksContainer>
        </S.Right>
      </S.Wrapper>
    </S.HomeHero>
  )
}

export default HomeHero
