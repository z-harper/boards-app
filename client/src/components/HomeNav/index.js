import * as S from './HomeNav.styled';
import { data } from './HomeNav.data';

const HomeNav = () => {
  return (
    <S.HomeNav>
      <S.LinksList>
          {data.links.map(navLink => {
            return (
              <S.LinkItem key={navLink.linkTo}>
                <S.Link to={navLink.linkTo}>
                  {navLink.displayAs}
                </S.Link>
              </S.LinkItem>
            )
          })}
      </S.LinksList>
    </S.HomeNav>
  )
}

export default HomeNav
