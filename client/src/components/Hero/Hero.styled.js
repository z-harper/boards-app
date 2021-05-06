import styled from 'styled-components';
import breakpoints from '../../themes/breakpoints';

export const Hero = styled.div`
  margin: auto;
  padding: 0 1rem;

  @media screen and ${breakpoints.device.sm} {
    padding: 0;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1100px;
  margin: auto;
  padding: 2rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media screen and ${breakpoints.device.md} {
    grid-template-columns: 1fr;
    column-gap: 0px;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and ${breakpoints.device.md} {
    grid-area: 1 / 1 / 2 / 2;
    align-self: top;
    text-align: left;
    height: 100%;
    width: 100%;
    margin: auto;
    z-index: 2;
  }

  @media screen and ${breakpoints.device.sm} {
    width: 100%;
    align-self: stretch;
    justify-content: space-around;
    padding: 0 6px;
  }
`;

export const ImgContainer = styled.div`
  margin: 0 0 1rem 2rem;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and ${breakpoints.device.md} {
    grid-area: 1 / 1 / 2 / 2;
    z-index: 1;
    margin: 0;
    margin-top: 1rem;
    align-items: flex-end;
    justify-content: flex-end;
  }

  @media screen and ${breakpoints.device.sm} {
    margin-top: 3rem;
    align-items: center;
    justify-content: center;
  }
`;

export const Img = styled.img`
  
  @media screen and ${breakpoints.device.md} {
    opacity: 0.4;
  }
`;

export const Heading = styled.h1`
  color: #eabb59;
  
  @media screen and ${breakpoints.device.md} {
    text-align: center;
  }
`;

export const BenefitsList = styled.ul`
  height: auto;
  margin-top: 1rem;
  
  list-style: none;

  @media screen and ${breakpoints.device.md} {
    margin-top: 3rem;
    width: 70%;
  }

  @media screen and ${breakpoints.device.sm} {
    width: 100%;
  }
`;

export const ListItem = styled.li`
  margin-bottom: 2rem;
  font-size: 18px;
  font-weight: bold;
  letter-spacing: 1.2px;
  color: #004339;
`;

