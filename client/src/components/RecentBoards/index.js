import * as S from './RecentBoards.styled';

const testBoards = [
  {
    id: 1,
    name: 'Test Board 1',
    boardAdded: new Date('2021-04-28'),
    lastPost: new Date('2021-05-01'),
  },
  {
    id: 2,
    name: 'Board 2 - No post',
    boardAdded: new Date('2021-04-29'),
    lastPost: new Date(0),
  },
  {
    id: 3,
    name: 'Board 3 - most recent post',
    boardAdded: new Date('2021-05-01'),
    lastPost: new Date('2021-05-05'),
  },
  {
    id: 4,
    name: 'Board 4 - most recent add',
    boardAdded: new Date('2021-05-04'),
    lastPost: new Date('2021-05-04'),
  }
]

const RecentBoards = () => {
  return (
    <S.RecentBoards>
      <S.Wrapper>
        <S.TitleContainer>
          <S.Title>Recent boards</S.Title>
          <S.MyBoardsLink to='/boards'>My Boards</S.MyBoardsLink>
        </S.TitleContainer>
        <S.BoardsContainer>
          {testBoards
            .slice()
            .map(board => { return {...board, mostRecent: board.boardAdded > board.lastPost ? board.boardAdded : board.lastPost}})
            .sort((a, b) => b.mostRecent - a.mostRecent)
            .slice(0, 6)
            .map(board => {
              return (
                <S.BoardLink key={board.id} to={`/board/${board.id}`}>
                  <S.BoardName>{board.name}</S.BoardName>
                  <S.LastActive>{board.mostRecent.toLocaleDateString()}</S.LastActive>
                </S.BoardLink>
              )
          })}
        </S.BoardsContainer>
      </S.Wrapper>
    </S.RecentBoards>
  )
}

export default RecentBoards
