import * as S from './BoardPgContent.styled';

const convertDate = (dt) => {
  let date = new Date(Date.parse(dt));
  return date.toLocaleDateString();
}

const BoardPgContent = ({currentBoard}) => {
  return (
    <S.BoardPgContent>
      <S.Wrapper>
        <S.BoardDescWrap>
          <S.TopHeading>
            <S.BoardName>{currentBoard.name}</S.BoardName>
            <S.CreatorDetails>
              <S.BoardCreatedAt>Created on: {convertDate(currentBoard.createdAt)}</S.BoardCreatedAt>
              <S.BoardCreator href={`mailto:${currentBoard.creator}`} target='_blank' rel='noopener noreferrer'>{currentBoard.creator}</S.BoardCreator>
            </S.CreatorDetails>
          </S.TopHeading>
          {currentBoard.imgUrl && 
            <S.BoardImgWrap>
              <S.BoardImg src={currentBoard.imgUrl} alt='img not found'/>
            </S.BoardImgWrap>
          }
          {currentBoard.textDesc && 
            <S.BoardText>{currentBoard.textDesc}</S.BoardText>
          }
        </S.BoardDescWrap>
      </S.Wrapper>
    </S.BoardPgContent>
  )
}

export default BoardPgContent
