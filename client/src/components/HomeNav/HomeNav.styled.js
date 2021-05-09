import styled from 'styled-components';
import breakpoints from '../../themes/breakpoints';
import { NavLink } from 'react-router-dom';

export const HomeNav = styled.div`
  margin-top: 2rem;

  @media screen and ${breakpoints.device.xs} {
    margin-top: 0.5rem;
  }
`;

export const LinksList = styled.ul`
  max-width: 1100px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  list-style: none;
  text-align: center;
  line-height: 36px;


  @media screen and ${breakpoints.device.xs} {
    flex-direction: column;
  }
`;

export const LinkItem = styled.li`
  margin: 0 0.5rem;
`;

export const Link = styled(NavLink)`
  padding: 4px 8px;
  font-size: 18px;
  color: #007665;
  text-decoration: none;
  text-align: center;
  border: 1px solid #fff;
  transition: 0.2s ease-in-out;

  &:hover {
    color: #d2a850;
  }

  &.active {
    color: #d2a850;
    border-bottom: 1px solid #d2a850;
  }
`;