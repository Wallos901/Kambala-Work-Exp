import React from "react";
import styled from "styled-components";
import { ButtonBase, ActionButton } from "./OldButtonsBase";

const OldPrimaryButton = ({ children }) => {
  return (
    <OldPrimaryButtonStyled>
      <span>{children}</span>
    </OldPrimaryButtonStyled>
  );
};

export default OldPrimaryButton;

// =============================== STYLED COMPONENTS ===============================

const OldPrimaryButtonStyled = styled.a`
  ${ButtonBase}

  font-size: 16px;
  color: #111619;
  background: linear-gradient(#02dae6, #00beff);
  background-origin: border-box;
  border: 1px solid transparent;

  &:hover,
  &:active {
    background: linear-gradient(#3ddfe9, #3ccbfb);
  }

  ${ActionButton}
`;
