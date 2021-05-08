import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Navbar = styled.div`
  height: 80px;
  padding: 0 1rem;
  // position: sticky;
  // top: 0;
  // z-index: 5;
  background: rgba(0, 118, 101, 0.2);
  box-shadow: 0 4px 2px -2px rgba(0, 118, 101, 0.2);
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1100px;
  height: 100%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Img = styled.img`
  width: 90px;
  height: 60px;
`;

export const LogoLink = styled(NavLink)`
  display: inline-flex;
  align-items: center;
  height: 100%;
  cursor: pointer;
`;

export const HomeLinks = styled.div``;

export const Link = styled(NavLink)`
  padding: 10px 12px;
  display: inline-flex;
  align-items: center;
  font-size: 20px;
  color: #fff;
  font-weight: bold;
  text-decoration: none;
  background: ${props => props.color ? props.color : 'rgba(0, 118, 101, 0.4)'};
  border-radius: 32px;
  cursor: pointer;
  transition: 0.2s ease-in-out;

  &:hover {
    background: ${props => props.hover ? props.hover : 'rgba(0, 118, 101, 0.6)'};
  }
`;
