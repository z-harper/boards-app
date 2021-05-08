import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import breakpoints from '../../themes/breakpoints';

export const HomeHero = styled.div`
  margin: auto;
  padding: 2rem 1rem;

  @media screen and ${breakpoints.device.sm} {
    padding: 1rem 0;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1100px;
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 2fr;

  @media screen and ${breakpoints.device.sm} {
    display: flex;
    flex-direction: column-reverse;
  }
`;

export const Left = styled.section`
  padding: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ImgWrapper = styled.div``;

export const Img = styled.img``;

export const UploadImgLink = styled(NavLink)`
  border-radius: 12px;
  margin: 1rem;
  padding: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: #007665;
  text-decoration: none;
  transition: 0.2s ease-in-out;

  &:hover {
    background: #cce3e0;
  }
`;

export const UploadImgText = styled.h5`
  padding-top: 4px;
`;

export const EditProfileLink = styled(NavLink)`
  margin-top: 8px;
  padding: 4px;
  font-size: 16px;
  letter-spacing: 1.1px;
  color: rgba(0, 118, 101, 0.7);
  border-radius: 16px;
  cursor: pointer;
  transition: 0.25s ease-in-out;

  &:hover {
    background: #cce3e0;
  }
`;

export const Right = styled.section`
  padding: 0 1rem;

  @media screen and ${breakpoints.device.sm} {
    padding: 0;
  }
`;

export const Greeting = styled.h1`
  margin-bottom: 1rem;
  font-size: 2.5rem;
  color: #007665;

  @media screen and ${breakpoints.device.sm} {
    text-align: center;
  }
`;

export const LinksContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 1fr;
  gap: 4rem;
  list-style: none;
  text-align: center;

  @media screen and ${breakpoints.device.lg} {
    gap: 3rem;
  }

  @media screen and ${breakpoints.device.md} {
    gap: 1rem;
  }

  @media screen and ${breakpoints.device.sm} {
    gap: 0.5rem;
  }
`;

export const LinkItem = styled.li`
  border: 2px solid #d2a850;
  border-radius: 12px;
  margin: 1rem 0;
  padding: 0.5rem;
  cursor: pointer;
  transition: 0.2s ease-in-out;

  &:hover {
    background: #cce3e0;
  }
`;

export const IconWrapper = styled.div``;

export const Link = styled(NavLink)`
  color: #007665;
  font-weight: bold;
  text-decoration: none;
`;
