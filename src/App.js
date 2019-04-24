import React from "react";
import GetGif from "./containers/GetGif";
import Switch from "./containers/Switch";
import Twitter from './containers/Twitter';

import './App.css';
import styled from 'styled-components';

import Header from './components/Header/Header';
import Hukidashi from './components/Hukidashi/Hukidashi';
import Footer from './components/Footer/Footer';

const Wrapper = styled.div`
  text-align: center;
  margin: 0 auto;
  width: 60%;

  @media only screen and (max-width: 768px)  {
    width: 70%;
  }
`


const App = () => {
  return (
  <React.Fragment>
    <Wrapper>
      <Header />
      <GetGif />
      <Switch />
      <Twitter />
      <Hukidashi />
    </Wrapper>
      <Footer />
  </React.Fragment>
  );
};

export default App;
