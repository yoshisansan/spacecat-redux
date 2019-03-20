import React from "react";
import styled from 'styled-components';

import Preloading from './Preloading/Preloading';

const Img = styled.img`
    width: 50rem;
    height: 50rem;
    cursor: pointer;

    margin-top: 1.5rem;
    border: solid 1.3rem #000;
    border-radius: 3rem;

    @media only screen and (max-width: 1024px)  {
      width: 30rem;
      height: 30rem;
    }

    @media only screen and (max-width: 728px)  {
      width: 21rem;
      height: 21rem;
    }
`

let timerID = 0;

const timerTest = () => {
  console.log('大麻');
  // setTimeout(timerTest(), 10000);
  timerID = setTimeout(() => {timerTest()}, 1000);
}

export default class GetGif extends React.Component {

  constructor(props){
    super(props);
  }

  render(){
    const { urlList, tweetShare, shareAction, gifListReceiver } = this.props;
    if(tweetShare === "OFF"){
      //シェアする猫のurlを渡してあげる
      shareAction(urlList);
    }

    return (
      <div>
      <Img src={urlList} alt="test" key={urlList} />
      <Preloading src={gifListReceiver} alt="test" />
      <button onClick={()=>{ timerTest() } }>テスト</button>
      <button onClick={()=>{ clearTimeout(timerID) }}>クリア</button>
      </div>
    );
  }
}
