import { GlobalStyles } from "../styles/globalStyles";
import React from "react";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import { theme } from "../styles/theme";

const MyApp = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Kambala Work Exp Project</title>
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default MyApp;
