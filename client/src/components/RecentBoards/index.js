import { useSelector } from 'react-redux';
import * as S from './RecentBoards.styled';

const convertDate = (dt) => {
  let date = new Date(Date.parse(dt));
  return date.toLocaleDateString();
}

const RecentBoards = () => {
  const currentUser = useSelector(state => state.user);

  return (
    <S.RecentBoards>
      <S.Wrapper>
        <S.TitleContainer>
          <S.Title>Recent boards</S.Title>
          <S.MyBoardsLink to='/boards'>My Boards</S.MyBoardsLink>
        </S.TitleContainer>
        <S.BoardsContainer>
          {currentUser.boards
            .slice()
            .sort((a, b) => b.lastActive - a.lastActive)
            .slice(0, 6)
            .map(board => {
              return (
                <S.BoardLink key={board.boardId} to={`/board/${board.boardId}`}>
                  <S.BoardName>{board.boardName}</S.BoardName>
                  <S.LastActive>{convertDate(board.lastActive)}</S.LastActive>
                </S.BoardLink>
              )
          })}
        </S.BoardsContainer>
      </S.Wrapper>
    </S.RecentBoards>
  )
}

export default RecentBoards
