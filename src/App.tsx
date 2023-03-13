import React, { useState } from "react";
import styled from "styled-components";
import { Provider } from "react-redux";
import Footer from "./Components/Footer";
import Questions from "./Components/Questions";
import SurveyTitle from "./Components/SurveyTitle";
import store from "./store";
import { Box } from "@mui/material";

const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f0ebf8;
  width: 100vw;
  height: 100vh;
  border-radius: 10px;
`;

const Main = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;
  width: 100%;
  margin-bottom: 60px;
  margin-top: 12px;
`;

function App() {
  return (
    <Provider store={store}>
      <Wrapper>
        <Main>
          <SurveyTitle />
          <Questions />
        </Main>
        <Footer />
      </Wrapper>
    </Provider>
  );
}

export default App;
