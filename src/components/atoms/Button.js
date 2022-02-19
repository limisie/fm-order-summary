import React from 'react';
import styled from "styled-components";

const StyledButton = styled.button`
  width: 100%;
  font-weight: ${({theme}) => theme.fontWeights.bolder};
  font-size: ${({theme}) => theme.fontSizes.m};
  margin: 10px 0;
  padding: 14px;
  text-align: center;
  border-radius: 10px;

  &:hover {
    cursor: pointer;
  }
`;

const ProceedButton = styled(StyledButton)`
  color: white;
  background-color: ${({theme}) => theme.primaryColors.brightBlue};
  box-shadow: 0 15px 15px ${({theme}) => theme.primaryColors.brightBlueShadow};
  border: none;
  z-index: 1;

  &:hover {
    background-color: ${({theme}) => theme.complementaryColors.darkBlue};
  }
`;

const CancelButton = styled(StyledButton)`
  color: ${({theme}) => theme.complementaryColors.desaturatedBlue};
  background-color: white;
  border: none;
  
  &:hover {
    background-color: ${({theme}) => theme.complementaryColors.paleBlue};
  }
`;

const Button = ({isCancel, children, ...props}) =>
    isCancel ?
        <CancelButton {...props}>{children}</CancelButton> :
        <ProceedButton {...props}>{children}</ProceedButton>;

export default Button;