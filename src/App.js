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

const Button = styled.div`

  margin-bottom: ${props => props.AdjustBottom === "ON" ? '19rem' : '0'};

  width: 70%;
  max-width: 50rem;
  text-align: cetner;
  margin-top: 4rem;
  margin-left: 2rem;
  cursor: pointer;
  background-color: #343d46;
  border: none;

  @media only screen and (max-width: 323px) {
    margin-left: 1rem;
    width: 22rem;
  }

  @media only screen and (min-widht: 324px) and (max-width: 767px) {
    width: 26rem;
  }

  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    width: 35rem;
  }
`

const App = () => {
  return (
  <React.Fragment>
    <Wrapper>
      <Header />
      <GetGif />
      <Button onClick={()=>{}}>
      <Switch />
      </Button>
      <Twitter />
      <Hukidashi />
    </Wrapper>
      <Footer />
  </React.Fragment>
  );
};

export default App;
