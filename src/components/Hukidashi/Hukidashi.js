import React, { Component } from 'react';
import styled from 'styled-components';
import CatComment from './hukidashi-comment.png';

const NyanCat = styled.div`

    display: grid;
    grid-template-columns: 1fr 2fr;
    color: white;
    font-weight: bold;
    align-items: center;
    width: 70%;
    margin:0 auto;
    padding: 2rem 0 5rem 0;

    @media only screen and (max-width: 764px)  {
        padding: 0 0 5rem 0;
        width: 90%;
  }
        `

const Radius = styled.div`
    border-radius: 50% 50%;
    background-color: #fff;
    width: 12rem;
    height: 12rem;
    overflow: hidden;
    margin-left: 2rem;

  img {
    width: 12rem;
    height: 12rem;
    transform: scale(1.5);
  }

  @media only screen and (max-width: 756px)  {

      width: 9rem;
      height: 9rem;

    img {
      width: 9rem;
      height: 9rem;
      transform: scale(1.5);
    }
}
`

export default class Hukidashi extends Component {
  render() {
    return (
      <NyanCat>
        <Radius>
          <img src="https://media0.giphy.com/media/7NIECetwh3na0/giphy.gif?cid=3640f6095c604a15685877462eeab496" alt="NyanCat"/>
        </Radius>
        <img src={CatComment} alt="地球ヲ宇宙猫デ支配セヨ"/>
      </NyanCat>
    );
  }
}
