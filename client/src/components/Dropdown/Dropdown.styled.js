import styled from 'styled-components';
import breakpoints from '../../themes/breakpoints';

export const Dropdown = styled.div`
  position: relative;
`;

export const selectedFriendContainer = styled.div`
  display: flex;
`;

export const SelectedFriend = styled.div`
  margin: 2px 2px 2px 0;
  padding: 2px 4px;
  display: inline-block;
  color: #00463c;
  border: 1px solid #d2a850;
  border-radius: 32px;
  transition: 0.2s ease-in-out;

  &:hover {
    background: rgba(210,168,80,0.6)
  }
`;

export const Wrapper = styled.div`
  padding: 6px 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  background-color: #fff;
  border: 1px solid #a88640;
  border-radius: 0 0 4px 4px;
  box-shadow: 2px 1px 1px rgba(168,134,64,0.4);
  cursor: pointer;
`;

export const Search = styled.input`
  width: 90%;
  padding: 4px; 8px;
  font-size: 16px;
  color: #00463c;
  
  @media screen and ${breakpoints.device.sm} {
    width: auto;
  }
`;

export const DataSelection = styled.ul`
  position: absolute;
  z-index: 10;
  width: 100%;
  max-height: 200px;
  overflow-y: auto;
  background: #e5f1ef;
  border-left: 1px solid #a88640;
  border-radius: 0 4px 4px 0;
`;

export const DataItem = styled.li`
  margin: 0 4px;
  padding: 2px 12px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  cursor: pointer;
  border-bottom: 1px solid #a88640;

  &:hover {
    background: rgba(168,134,64,0.4);
    transform: scale(1.02);
  }
`;

export const Name = styled.p`
  color: #00463c;
`;

export const Selected = styled.small`
  color: #00463c;
`;