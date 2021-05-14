import { useState } from 'react';
import * as S from './BoardPgPosts.styled';
import { FaRegMinusSquare, FaRegPlusSquare } from 'react-icons/fa';
import {testPosts} from './testposts';

const convertDate = (dt) => {
  let date = new Date(Date.parse(dt));
  return `${date.toLocaleDateString()}, ${date.toLocaleTimeString()}`;
}

const BoardPgPosts = ({currentPosts}) => {
  const [posts, setPosts] = useState(testPosts
    .slice()
    .map(post => ({...post, isShowingPost: true}))
    .sort((a, b) => b.createdAt - a.createdAt)
  )

  const handleShowingPost = (postId) => {
    console.log(postId);
    setPosts(posts.map(post => post.id === postId 
      ? {...post, isShowingPost: !post.isShowingPost} 
      : post
    ))
  }

  return (
    <S.BoardPgPosts>
      {posts.map(post => {
        return (
          <S.PostContainer key={post.id}>
            <S.PostHeader>
              <S.AuthorDetails>
                <S.PostAuthor href={`mailto:${post.author}`} target='_blank' rel='noopener noreferrer'>{post.author}</S.PostAuthor>
                <S.PostCreatedAt>{convertDate(post.createdAt)}</S.PostCreatedAt>
              </S.AuthorDetails>
              <S.MinimizeBtnWrap onClick={() => handleShowingPost(post.id)}>
                {post.isShowingPost 
                  ? <FaRegMinusSquare style={{color: '#d2a850'}} size={24} />
                  : <FaRegPlusSquare style={{color: '#d2a850'}} size={24} />
                }
              </S.MinimizeBtnWrap>
            </S.PostHeader>
            {post.isShowingPost && <S.PostContent>
              {post.imgUrl && 
                <S.PostImgWrap>
                  <S.PostImg src={post.imgUrl} alt='img not found'/>
                </S.PostImgWrap>
              }
              <S.PostText>{post?.textDesc}</S.PostText>
            </S.PostContent>}
          </S.PostContainer>
        )
      })}
    </S.BoardPgPosts>
  )
}

export default BoardPgPosts
