import React from "react";
import styled from 'styled-components';

import Preloading from './Preloading/Preloading';

const Img = styled.img`
    width: 35rem;
    height: 35rem;
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

export default class GetGif extends React.Component {

  constructor(props){
    super(props);
  }

  render(){
    const { tweetShare, shareAction, gifListReceiver } = this.props;
    // if(tweetShare === "OFF"){
    //   //シェアする猫のurlを渡してあげる
    //   // shareAction(urlList);
    // }

    return (
      <Preloading shareAction={shareAction} src={gifListReceiver} bool={tweetShare} alt="test" />
    );
    // 旧：<Img src={urlList} alt="test" key={urlList} />
    // <button onClick={()=>{ timerTest() } }>テスト</button>
    // <button onClick={()=>{ clearTimeout(timerID) }}>クリア</button>
  }
}
