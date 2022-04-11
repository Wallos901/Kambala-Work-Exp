import React from "react";
import styled from "styled-components";
import { up } from "styled-breakpoints";
import { ButtonBase, ActionButton } from "./ButtonsBase";

const SecondaryButton = ({ children }) => {
  return (
    <SecondaryButtonStyled>
      <span>{children}</span>
    </SecondaryButtonStyled>
  );
};

export default SecondaryButton;

// =============================== STYLED COMPONENTS ===============================

const SecondaryButtonStyled = styled.a`
  ${ButtonBase}

  color: ecf0f1;
  background: rgba(65, 70, 73, 0.85);
  border: 1px solid transparent;

  ${up("medium")} {
    &:hover {
      background: rgba(91, 98, 103, 0.8);
      border: 1px solid #5b6267;
    }
  }

  &:focus,
  &:active {
    background: rgba(91, 98, 103, 0.8);
    border: 1px solid #5b6267;
  }

  ${ActionButton}
`;
