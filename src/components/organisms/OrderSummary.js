import React from 'react';
import styled from "styled-components";
import IllustrationHero from '../../assets/images/illustration-hero.svg'
import CartItem from "../molecules/CartItem";
import Button from "../atoms/Button";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  max-width: 450px;
  width: 100%;
  border-radius: 20px;
  padding: 0;
  margin: auto;
  overflow: hidden;
  box-shadow: 0 20px 30px ${({theme}) => theme.primaryColors.brightBlueShadow};
`;

const StyledImg = styled.img`
  object-fit: contain;
  max-width: 100%;
`;

const Content = styled.div`
  padding: 30px 50px;
  display: flex;
  justify-content: center;
  flex-direction: column;

  @media (max-width: ${({theme}) => theme.widths.mobile}) {
    padding: 30px 25px;
  }
`;

const Title = styled.h1`
  color: ${({theme}) => theme.complementaryColors.darkBlue};
  font-weight: ${({theme}) => theme.fontWeights.bolder};
  font-size: ${({theme}) => theme.fontSizes.l};
  text-align: center;
  margin: 0 0 10px 0;
`;

const Paragraph = styled.p`
  color: ${({theme}) => theme.complementaryColors.desaturatedBlue};
  font-weight: ${({theme}) => theme.fontWeights.light};
  font-size: ${({theme}) => theme.fontSizes.m};
  text-align: center;
  margin: 10px 0;
`;

const OrderSummary = () => {
    const handleClick = () => console.log('clicked')

    return (
        <Wrapper>
            <StyledImg src={IllustrationHero} alt="IllustrationHero"/>
            <Content>
                <Title>Order Summary</Title>
                <Paragraph>You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you
                    like!</Paragraph>
                <CartItem/>
                <Button type='proceed' onClick={handleClick}>Proceed to Payment</Button>
                <Button type='cancel' onClick={handleClick}>Cancel Order</Button>
            </Content>
        </Wrapper>
    )
};

export default OrderSummary;