import React from "react";
import styled from "styled-components";

const Divider = () => {
  return <DividerStyled />;
};

export default Divider;

// =============================== STYLED COMPONENTS ===============================

const DividerStyled = styled.div`
  height: 50%;
  border: 1px solid #b0bec5;
`;
