import React, { Component } from 'react';
import styled from 'styled-components';

const Foot = styled.div`
    background-color: #000;
    height: 8rem;
    color: #e0e0e0;
    text-align: right;
    font-size: 1.5rem;
    letter-spacing: 0.2rem;

    p{
      position: relative;
      top: calc(50% - 1.5rem);
      right: 2rem;
      padding: 0.1rem;
    }

    a{
      color: #4169e1;
    }
`

export default class Footer extends Component {
  render() {
    return (
      <Foot>
        <p>copyrights 2019 <span>©️</span> <a href="https://twitter.com/akifumiyoshimu">akifumiyoshimu</a></p>
        <p>メンター<a href="https://twitter.com/van_eng622">Van(Web開発コーチングの相談乗ります)</a></p>
      </Foot>
    );
  }
}
