import React from 'react';
import styled from "styled-components";
import desktopSVG from '../../assets/images/pattern-background-desktop.svg'
import mobileSVG from '../../assets/images/pattern-background-mobile.svg'

const Background = styled.div`
  content: '';
  position: absolute;
  height: 100%;
  width: 100%;
  background: url(${desktopSVG}) no-repeat;

  @media (max-width: ${({theme}) => theme.widths.mobile}) {
    background: url(${mobileSVG}) no-repeat;
  }
`

const Wrapper = styled.div`
  width: 100%;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 1;
  padding: 70px 20px;

  @media (max-width: ${({theme}) => theme.widths.mobile}) {
    padding: 60px 20px;
  }

`

const MainTemplate = ({children}) => (
    <>
        <Wrapper>{children}</Wrapper>
        <Background/>
    </>
);

export default MainTemplate;