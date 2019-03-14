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
      a {
        pointer-events: ${props => props.tweetDisplay === "OFF" ? '' : 'none'};

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
        a {
          font-size: 1.7rem;
        }
      }
      @media only screen and (min-width: 324px) and (max-width: 767px) {
        margin: 6rem auto;
        width: 25rem;
        a {
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

    const twitterText = "地球ヲ、宇宙猫デ支配セヨ... ＃宇宙猫";
    const twitterLink = `https://twitter.com/share?url=${getTweet}&text=${twitterText}`;

    return (
    <TwitterBtn tweetDisplay={tweetFlag}><a href={twitterLink}><span className="fab fa-twitter"></span>宇宙猫を解放する</a></TwitterBtn>
    );
  }
}
