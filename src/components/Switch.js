import React from 'react';
import styled from 'styled-components';
import SlotOff from './antenaOff.png';
import SlotOn from './antenaOn.png';
import SlotWait from './antenaWait.png'

const Slotter = styled.img`

  width: 70%;
  max-width: 26rem;
  text-align: cetner;
  margin-top: 2.5rem;
  cursor: pointer;
  background-color: #343d46;


  animation: float 2s ease-in-out infinite;


  @keyframes float {
    0% { transform:translateY(0) }
    50% { transform:translateY(-1rem) }
    100% { transform:translateY(0) }

  @media only screen and (max-width: 323px) {
    margin-left: 1rem;
    width: 22rem;
  }
  @media only screen and (min-widht: 324px) and (max-width: 767px) {
    width: 24rem;
  }
  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    width: 26rem;
  }
  `

export default class Switch extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { buttonText, hitGiphy, getBool } = this.props;
    const SlotOnWait = buttonText === "wait..." ? SlotWait : SlotOn;
    const Slots = buttonText === "スロット開始" ? SlotOnWait : SlotOff;
    // console.log(`SlotsのURL${Slots}`);
    return (
      <div>
        <Slotter onClick={()=>{hitGiphy(getBool)}} src={Slots} />
      </div>
    );
  }
// <button onClick={this.getButton(buttonText)}>{buttonText}</button>
  getButton = buttonText => {
    const { hitGiphy , switchOff } = this.props;

    switch (buttonText) {
      case "ボタン":
        return hitGiphy;

      case "スロット開始":
        return hitGiphy;

      case "スロット停止":
        return switchOff;

      default:
    }
  };
}
