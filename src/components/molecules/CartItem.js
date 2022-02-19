import React from 'react';
import styled from "styled-components";
import {ReactComponent as MusicIcon} from '../../assets/icons/icon-music.svg';

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 10px;
  background-color: ${({theme}) => theme.complementaryColors.paleBlue};
  border-radius: 10px;
  margin: 20px 0;
`;

const ItemIcon = styled(MusicIcon)`
  margin: 5px;
`;

const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: start;
  padding: 10px;

  h3 {
    font-weight: ${({theme}) => theme.fontWeights.bolder};
    font-size: ${({theme}) => theme.fontSizes.s};
    color: ${({theme}) => theme.complementaryColors.darkBlue};
    margin: 0;
  }

  p {
    font-weight: ${({theme}) => theme.fontWeights.light};
    font-size: ${({theme}) => theme.fontSizes.s};
    color: ${({theme}) => theme.complementaryColors.desaturatedBlue};
    margin: 0;
  }
`;

const StyledLink = styled.a`
  color: ${({theme}) => theme.primaryColors.brightBlue};
  font-weight: ${({theme}) => theme.fontWeights.bold};
  font-size: ${({theme}) => theme.fontSizes.s};
  text-decoration: underline;
  margin-left: auto;
  padding-right: 10px;
  align-self: center;
  
  &:hover {
    color: ${({theme}) => theme.complementaryColors.darkBlue};
  }
`;

const CartItem = () => (
    <Wrapper>
        <ItemIcon/>
        <ItemInfo>
            <h3>Annual Plan</h3>
            <p>$59.99/year</p>
        </ItemInfo>
        <StyledLink href='/'>Change</StyledLink>
    </Wrapper>
);

export default CartItem;