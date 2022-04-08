import React from "react";
import styled from "styled-components";

const Layout = ({ children }) => {
  return (
    <LayoutStyled>
      <MainStyled>{children}</MainStyled>
    </LayoutStyled>
  );
};

export default Layout;

// =============================== STYLED COMPONENTS ===============================

const LayoutStyled = styled.div`
  max-width: 80vw;
  width: 100%;
  margin: auto;
`;

const MainStyled = styled.main`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
`;
