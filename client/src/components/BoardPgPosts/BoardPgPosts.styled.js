import styled from 'styled-components';
import breakpoints from '../../themes/breakpoints';

export const BoardPgPosts = styled.div`
  padding: 0 1rem;
`;

export const PostContainer = styled.section`
  max-width: 800px;
  margin: auto;
  margin-top: 1rem;
  padding: 1rem;
  background: rgba(0,118,101,0.9);
  border: 4px solid #bd9748;
  border-radius: 10px;
  color: #fff;

  @media screen and ${breakpoints.device.sm} {
    padding: 0 8px 8px 8px;
  }
`;

export const PostHeader = styled.header`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 8px;
`;

export const AuthorDetails = styled.div``;

export const PostAuthor = styled.a`
  color: #d2a850;
  font-size: 18px;
  letter-spacing: 1.1px;
  cursor: pointer;
  transition: 0.2s ease-in-out;

  &:hover {
    color: rgba(210,168,80,0.8);
  }
`;

export const PostCreatedAt = styled.p`
  margin-top: 2px;
`;

export const MinimizeBtnWrap = styled.span`
  padding: 5px 6px 2px 6px;
  border-radius: 50%;
  cursor: pointer;
  transition: 0.2s ease-in-out;

  &:hover {
    background: rgba(0,118,101,1);
  }
`;

export const PostImgWrap = styled.div`
  max-width: 700px; 
  max-height: 700px;
  padding: 1rem 0;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and ${breakpoints.device.lg} {
    max-width: 600px;
    max-height: 600px;
  }

  @media screen and ${breakpoints.device.md} {
    max-width: 450px;
    max-height: 450px;
  }

  @media screen and ${breakpoints.device.sm} {
    max-width: 300px;
    max-height: 300px;
  }
`;

export const PostImg = styled.img`
  width: 100%;
  height: 100%;
`;

export const PostText = styled.p`
  line-height: 24px;
`;