import { css } from "styled-components";
import { up } from "styled-breakpoints";

export const ActionButton = css`
  padding: 12px 16px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  line-height: 22px;
  white-space: nowrap;
  text-transform: none;

  ${up("xsmall")} {
    padding: 12px 20px;
  }

  ${up("xxlarge")} {
    font-size: 20px;
    padding: 16px 24px;
  }
`;

export const ButtonBase = css`
  display: inline-block;
  position: relative;
  min-width: 125px;
  padding: 38px 40px;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.25;
  border: 2px solid transparent;
  border-radius: 100px;
  text-transform: uppercase;
  cursor: pointer;
  text-align: center;
  transition: 250ms ease-in-out;
  transition-property: background, border-color, color;

  &[disabled] {
    cursor: default;
    background: #0084cc !important;
    border-color: #0084cc !important;
    color: rgba(#ecf0f1, 0.7) !important;
    opacity: 0.7;
  }
`;
