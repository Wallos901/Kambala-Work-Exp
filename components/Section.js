import React from "react";
import styled from "styled-components";

const Section = ({ children }) => {
  return <SectionStyled>{children}</SectionStyled>;
};

export default Section;

// =============================== STYLED COMPONENTS ===============================

const SectionStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
