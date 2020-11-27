import React from "react";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";
import { typeScale } from "../utils";
import { ilustrations, CloseIcon } from "../assets";
import { PrimaryButton } from "./Buttons";

export const ModalWrapper = styled.div`
  width: 800px;
  height: 500px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background-color: ${(props) => props.theme.forElementBackground};
  color: ${(props) => props.theme.textOnFormElementBackground};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  border-radius: 2px;
`;

const SignUpHeader = styled.h3`
  font-size: ${typeScale.header_3};
`;

const SignUpText = styled.p`
  font-size: ${typeScale.paragraph};
  max-width: 70%;
  text-align: center;
`;

const CloseModalButton = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  position: absolute;
  right: 50px;
  top: 50px;
  width: 24px;
  height: 24px;
  padding: 0;
`;

export const SignUpModal = ({ showModal, setShowModal }) => {
  const animation = useSpring({
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0)` : `translateY(-200%)`,
  });

  return (
    <animated.div style={animation}>
      <ModalWrapper>
        <img src={ilustrations.SignUp} alt='sign-up' />
        <SignUpHeader>Sign Up</SignUpHeader>
        <SignUpText>Sign up today to get access!</SignUpText>
        <PrimaryButton> Sign Up</PrimaryButton>
        <CloseModalButton aria-label='Close modal'>
          <CloseIcon />
        </CloseModalButton>
      </ModalWrapper>
    </animated.div>
  );
};
