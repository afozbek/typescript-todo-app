import React, { useEffect } from "react";
import styled from "styled-components";
import Header from "layout/Header";
import Footer from "layout/Footer";
import { BrowserRouter as Router } from "react-router-dom";
import Body from "layout/Body";


const MainContainer = styled.div`
  height: 100vh;
  background: ${props => props.theme.lightTheme};
`

const App = () => {
  return (
    <MainContainer className="App">
      <Router>
        <Header />
        <Body />
        <Footer />
      </Router>
    </MainContainer>
  );
}

export default App;
