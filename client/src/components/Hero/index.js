import * as S from './Hero.styled';
import heroImg from '../../images/Presentation_Isometric.svg';

const Hero = () => {
  return (
    <S.Hero>
      <S.Wrapper>
        <S.ContentContainer>
          <S.Heading>Welcome to your new collaboration tool</S.Heading>
          <S.BenefitsList>
            <S.ListItem>Create public and private boards</S.ListItem>
            <S.ListItem>Create specific boards for specific problems</S.ListItem>
            <S.ListItem>Whether you're a student or an office exec, boards makes it easy to collaborate</S.ListItem>
          </S.BenefitsList>
        </S.ContentContainer>
        <S.ImgContainer>
          <S.Img src={heroImg} alt='' />
        </S.ImgContainer>
      </S.Wrapper>
    </S.Hero>
  )
}

export default Hero
