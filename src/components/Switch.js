import React from 'react';
import styled from 'styled-components';
import SlotOff from './antenaOff.png';
import SlotOn from './antenaOn.png';

const Slotter = styled.img`

  animation: float 2s ease-in-out infinite;


  @keyframes float {
    0% { transform:translateY(0) }
    50% { transform:translateY(-1rem) }
    100% { transform:translateY(0) }
  `

export default class Switch extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { buttonText, hitGiphy, getBool } = this.props;
    const Slots = buttonText === "スロット開始" ? SlotOn : SlotOff;
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
