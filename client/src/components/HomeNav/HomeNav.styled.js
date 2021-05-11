import styled from 'styled-components';
import breakpoints from '../../themes/breakpoints';
import { NavLink } from 'react-router-dom';

export const HomeNav = styled.div`
  margin-top: 1rem;

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


export const Popup = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
  background: #fff;
  // opacity: 0.8;
`;

export const PopupWrapper = styled.div`
  position: relative;
  width: 65%;
  max-width: 800px;
  margin: auto;
  margin-top: 15vh;
  padding: 2rem 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 1px solid #007665;
  border-radius: 12px;

  @media screen and ${breakpoints.device.xs} {
    width: 90%;
  }
`;

export const PopupTitle = styled.h1`
  color: #007665;
  text-align: center;
  margin-bottom: 2rem;
  padding-bottom: 2px;
  border-bottom: 1px solid #007665;
`;

export const AddFriends = styled.li`
  padding: 4px 8px;
  font-size: 18px;
  color: #007665;
  text-decoration: none;
  text-align: center;
  cursor: pointer;
  border: 1px solid #fff;
  transition: 0.2s ease-in-out;

  &:hover {
    color: #d2a850;
  }
`;

export const PopupForm = styled.form`
  display: flex;
  justify-content: center;

  @media screen and ${breakpoints.device.sm} {
    flex-direction: column;
    align-items: center;
  }
`;

export const Label = styled.label`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

export const LabelText = styled.span``;

export const Input = styled.input`
  width: 250px;
  margin-right: 0.5rem;
  padding: 2px 6px;
  outline: none;
  color: #007665;
  font-size: 18px;
  border: 2px solid #007665;
  border-radius: 10px;

  @media screen and ${breakpoints.device.sm} {
    margin-right: 0;
    margin-bottom: 0.5rem;
  }
`;

export const SearchButton = styled.button`
  padding: 4px 14px;
  color: #fff;
  font-size: 20px;
  font-family: cursive;
  font-weight: bold;
  text-decoration: none;
  text-align: center;
  background: #007665;
  border: 1px solid #007665;
  border-radius: 10px;
  transition: 0.2s ease-in-out;

  &:hover {
    color: #d2a850;
  }

  @media screen and ${breakpoints.device.sm} {
    margin-top: 8px;
  }
`;

export const PopupCloseBtnWrap = styled.div`
  width: 50%;
  margin: auto;

  @media screen and ${breakpoints.device.md} {
    width: 100%;
  }
`;

export const PopupCloseBtn = styled.button`
  width: 100%;
  display: block;
  margin-top: 1rem;
  padding: 6px 18px;
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  text-decoration: none;
  text-align: center;
  letter-spacing: 1.1px;
  background: #d2a850;
  border-radius: 10px;
  transition: 0.2s ease-in-out;

  &:hover {
    color: #007665;
  }
`;

export const PopupEmailFound = styled.div`
  margin-top: 2rem;
`;

export const popupFoundMsg = styled.h4`
  color: #004c76;
  text-align: center;
  margin-bottom: 8px;
  padding-top: 8px;
  border-top: 1px solid #004c76;
`;

export const PopupFoundWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and ${breakpoints.device.md} {
    flex-direction: column;
  }
`;

export const PopupFoundDetails = styled.div`
  @media screen and ${breakpoints.device.md} {
    margin-bottom: 8px;
  }
`;

export const PopupFoundItem = styled.p`
  padding: 2px 0;
  color: #004c76;
`;

export const PopupAddBtnWrap = styled.div`
  @media screen and ${breakpoints.device.md} {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const PopupAddBtn = styled.button`
  
  padding: 6px 18px;
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  text-decoration: none;
  text-align: center;
  letter-spacing: 1.1px;
  background: #4c819f;
  border-radius: 10px;
  transition: 0.2s ease-in-out;

  &:hover {
    background: #004c76;
  }

  @media screen and ${breakpoints.device.md} {
    margin-top: 8px;
  }
`;