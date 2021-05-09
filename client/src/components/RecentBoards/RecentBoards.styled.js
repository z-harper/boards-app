import styled from 'styled-components';
import breakpoints from '../../themes/breakpoints';
import { Link } from 'react-router-dom';

export const RecentBoards = styled.div`
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
  padding: 4px 8px;
  background: #cce3e0;
  border-radius: 4px;
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.h1`
  margin: 1rem 0;
  color: #007665;
  font-family: cursive;
  letter-spacing: 1.1px;
`;

export const MyBoardsLink = styled(Link)`
  padding: 4px 8px;
  color: #007665;
  font-size: 20px;
  font-family: cursive;
  font-weight: bold;
  text-decoration: none;
  text-align: center;
  border: 1px solid #007665;
  border-radius: 32px;
  transition: 0.2s ease-in-out;

  &:hover {
    color: #d2a850;
    border-color: #d2a850;
  }
`;

export const BoardsContainer = styled.ul`
  margin-bottom: 1rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 1fr;
  grid-auto-columns: 1fr;
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
    grid-template-columns: 1fr;
    margin: 0 3rem;
  }

  @media screen and ${breakpoints.device.xs} {
    margin: 0;
  }
`;

export const Board = styled.li`
  background: #007665;
  border: 4px solid #bd9748;
  border-radius: 10px;
  min-height: 100px;
`;

export const BoardLink = styled(Link)`
  padding: 4px 0;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  background: #007665;
  border: 4px solid #bd9748;
  border-radius: 10px;
  color: #fff;
  font-family: cursive;
  text-decoration: none;  

  transition: 0.2s ease-in-out;

  &:hover {
    color: #d2a850;
  }

  @media screen and ${breakpoints.device.sm} {
    justify-content: space-evenly;
  }
`;

export const BoardName = styled.h4`
  letter-spacing: 1.1px;
`;

export const LastActive = styled.p``;