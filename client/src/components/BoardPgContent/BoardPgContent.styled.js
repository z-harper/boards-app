import styled from 'styled-components';
import breakpoints from '../../themes/breakpoints';

export const BoardPgContent = styled.div`
  padding: 2rem 1rem 0 1rem;
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1100px;
  margin: auto;  
`;

export const BoardDescWrap = styled.div`
  max-width: 800px;
  margin: auto;
  padding: 1rem;
  background: rgba(0,118,101,0.9);
  border: 4px solid #bd9748;
  border-radius: 10px;
  color: #fff;

  @media screen and ${breakpoints.device.sm} {
    padding: 0 8px 8px 8px;
  }
`;

export const TopHeading = styled.header`
  padding: 8px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and ${breakpoints.device.sm} {
    flex-direction: column;
  }
`;

export const BoardName = styled.h1`
  @media screen and ${breakpoints.device.sm} {
    padding-bottom: 8px;
  }
`;

export const CreatorDetails = styled.div`
  text-align: right;
`;

export const BoardCreatedAt = styled.p``;

export const BoardCreator = styled.a`
  color: #d2a850;
  font-size: 18px;
  letter-spacing: 1.1px;
  cursor: pointer;
  transition: 0.2s ease-in-out;

  &:hover {
    color: rgba(210,168,80,0.8);
  }
`;

export const BoardImgWrap = styled.div`
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

export const BoardImg = styled.img`
  width: 100%;
  height: 100%;
`;

export const BoardText = styled.p`
  line-height: 24px;
`;