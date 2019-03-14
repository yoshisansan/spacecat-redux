import React, { Component } from 'react';
import styled from 'styled-components';

const TwitterBtn = styled.div`
    animation: ${props => props.tweetDisplay === "OFF" ? 'squash 0.3s ease-in-out' : 'none'};
    background-color: ${props => props.tweetDisplay === "OFF" ? '#55acee' : 'gray'};
    width: 40rem;
    text-align: center;
    margin: 6rem auto;
    border-radius: 2rem;
    @keyframes squash {
      0% {transform: scale(1) translate(0, 0);}
      50% {transform: scale(1.5, .5) translate(0, 0.5rem);}
      100% {transform: scale(1) translate(0, 0);}
    }
    @keyframes fadeout {
      0% {transform: translate(0, 0);}
      50% {
        transform: translate(0, 0.3rem);
      }
      100% {transform: translate(0, 0.6rem);
      }
    }
      p {
        height: 7rem;
        color: #fff;
        line-height: 7rem;
        justify-content: center;
        letter-spacing: 0.2rem;
        font-size: 3rem;
        display:inline-block;
        padding: 0 1rem;
        white-space:nowrap;
      }
      span {
        padding-right: 0.8rem;
      }
      @media only screen and (max-width: 323px) {
        margin: 6rem auto;
        width: 20rem;
        p {
          font-size: 1.7rem;
        }
      }
      @media only screen and (min-width: 324px) and (max-width: 767px) {
        margin: 6rem auto;
        width: 25rem;
        p {
          font-size: 2.2rem;
        }
      }
      @media only screen and (min-width: 768px) and (max-width: 1024px) {
        width: 35rem;
        }
`

export default class Twitter extends Component {
  constructor(props){
    super(props);
  }

  render() {
    const { tweetFlag, getTweet } = this.props;
    console.log(tweetFlag);
    console.log(`getTweet!${getTweet}`);

    return (
    <TwitterBtn tweetDisplay={tweetFlag} ><p><span className="fab fa-twitter"></span>宇宙猫を解放する</p></TwitterBtn>
    );
  }
}
