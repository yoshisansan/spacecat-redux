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
    }
`

export default class Footer extends Component {
  render() {
    return (
      <Foot>
        <p>copyrights 2019 <span>©️</span> akifumiyoshimu</p>
      </Foot>
    );
  }
}
