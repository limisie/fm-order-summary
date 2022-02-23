import React from 'react';
import styled from "styled-components";
import desktopSVG from '../../assets/images/pattern-background-desktop.svg'
import mobileSVG from '../../assets/images/pattern-background-mobile.svg'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: url(${desktopSVG}) no-repeat fixed;
  background-size: contain;

  @media (max-width: ${({theme}) => theme.widths.mobile}) {
    background-image: url(${mobileSVG});
    padding: 60px 20px;
  }
`

const MainTemplate = ({children}) => (
    <Wrapper>{children}</Wrapper>
);

export default MainTemplate;