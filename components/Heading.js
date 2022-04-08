import React from "react";
import styled from "styled-components";

const Heading = ({ children }) => {
  return <HeadingStyled>{children}</HeadingStyled>;
};

export default Heading;

// =============================== STYLED COMPONENTS ===============================

const HeadingStyled = styled.h1`
  font-size: 3rem;
`;
