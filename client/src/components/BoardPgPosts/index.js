import { useState, useEffect, useRef } from "react";
import { useSpring, animated } from "react-spring";
import * as S from './BoardPgPosts.styled';
import { FaRegMinusSquare, FaRegPlusSquare } from 'react-icons/fa';

const convertDate = (dt) => {
  let date = new Date(Date.parse(dt));
  return `${date.toLocaleDateString()}, ${date.toLocaleTimeString()}`;
}

const BoardPgPosts = ({currentPosts}) => {
  return (
    <S.BoardPgPosts>
      {currentPosts
        .slice()
        .sort((a, b) => Date.parse(a.createdAt) - Date.parse(b.createdAt))
        .map(post => {
          return ( 
            <Post post={post} /> 
          )
      })}
    </S.BoardPgPosts>
  )
}

const Post = ({post}) => {
  const [showFullPost, setShowFullPost] = useState(true);
  const [postHeight, setPostHeight] = useState(null);
  const postRef = useRef(null);

  const postSpring = useSpring({
    from: {opacity: 0, height: 0},
    to: {
      opacity: showFullPost ? 1 : 0,
      height: showFullPost ? postHeight : 0
    }
  })

  useEffect(() => {
    const findDivHeight = () => {
      let height = 0;
      for (const elem of postRef.current.children) {
        height += elem.offsetHeight;
      }
      setPostHeight(height); // p margin-bottom 1rem by default
    }
    findDivHeight()
  }, [])

  return (
    <S.PostContainer key={post.id}>
      <S.PostHeader>
        <S.AuthorDetails>
          <S.PostAuthor href={`mailto:${post.author}`} target='_blank' rel='noopener noreferrer'>{post.author}</S.PostAuthor>
          <S.PostCreatedAt>{convertDate(post.createdAt)}</S.PostCreatedAt>
        </S.AuthorDetails>
        <S.MinimizeBtnWrap onClick={() => setShowFullPost(!showFullPost)}>
          {showFullPost 
            ? <FaRegMinusSquare style={{color: '#d2a850'}} size={24} />
            : <FaRegPlusSquare style={{color: '#d2a850'}} size={24} />
          }
        </S.MinimizeBtnWrap>
      </S.PostHeader>
      <animated.div style={{...postSpring, overflow: 'hidden'}} ref={postRef}>
        {post.imgUrl && <S.PostImgWrap><S.PostImg src={post.imgUrl} alt='img not found'/></S.PostImgWrap>}
        <S.PostText>{post?.textDesc}</S.PostText>
      </animated.div>
    </S.PostContainer>
  )
}

export default BoardPgPosts