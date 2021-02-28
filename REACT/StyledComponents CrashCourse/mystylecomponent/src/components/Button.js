import React from "react";
import styled, { css } from "styled-components";

import { Wrapper, fadeIn } from "./styled";

const OutterWrapper = styled.div`
  width: 100%;
  background-color: blueviolet;
  margin-top: 2rem;
`;

const StyleButton = styled.button`
  background-color: ${(props) => props.theme.colors.light};
  color: ${(props) => props.theme.colors.main};
  font-size: ${(props) => props.theme.fontSizes.p};
  padding: 0.5rem 1rem;
  margin-top: ${({ theme }) => theme.spacers.large};
  border: 1px solid palevioletred;
  border-radius: 3px;
  margin: ${({ margin }) => margin || "2rem"};
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  animation: 2s ${fadeIn} ease-in;

  ${({ primary }) =>
    primary &&
    css`
      background-color: palevioletred;
      color: white;
      box-shadow: ;
    `};

  &:hover {
    color: white;
    background-color: palegoldenrod;
  }

  //Ховер дочернего элемента
  ${OutterWrapper}:hover & {
    color: #333;
  }

  @media ${({ theme }) => theme.mediaQueries.bellow768} {
    font-size: 0.4 rem;
    color: blue;
  } ;
`;

const Button = ({ children, primary, margin }) => {
  return (
    <OutterWrapper>
      <StyleButton margin={margin} primary={primary}>
        {children}
      </StyleButton>
    </OutterWrapper>
  );
};

export default Button;
