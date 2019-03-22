import React from "react";
import styled from 'styled-components';
import Vita from './Vita.jpg';

const Preload = styled.img`
    max-width: 30rem;
    height: 30rem;
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

//1.indexからimagesを受け取る 2stateに格納する 3render前にcomponentDidmount 45
//srcにあらかじめ<preload />のJSXで格納しておく
class Preloading extends React.Component {

  static defaultProps = {
    src: "",
    bool: ""
  };

  state = {
    src: this.props.src,
    image: this.props.image,
    bool: this.props.bool,
    loaded: false,
    error: false
  };

  componentDidMount() {
    this.preloadImage(this.state.src);
  }

  componentWillReceiveProps({ src }) {
    if (src !== this.state.src) {
      this.preloadImage(src);
    }
  }


  // getRandomImage = () => {
  //     let Set = ;
  //     this.setState({Image: Set});
  //     timerID = setTimeout(getRandomImage(), 1000);
  // }

  preloadImage = src => {
    if (!src) {
      return;
    }

    const img = new window.Image();

    img.onload = () => {
      this.setState({ src, loaded: true, error: false });
    };
    img.onerror = () => {
      this.setState({ src, loaded: false, error: true });
    };
    img.src = src;
  };

  render() {
    const { loaded, error, src } = this.state;
    const { bool, makeTag, preloadTag } = this.props;

    const Items = src.map((list) =>
      <Preload height='100' src={list} alt="test" />
      );


    let timerID = 0;

    if(loaded === true){
      timerID = setTimeout(() =>{
        const Item = Items[Math.floor(Math.random() * 10) % Items.length];
        this.setState({ image: Item });
        console.log(this.state.image.props.src);
      }, 100);
    }


    if(bool === "OFF"){
      clearTimeout(timerID);
    }

    return (
      <div>

        {!loaded && !error && <Preload height='100' src={Vita} alt="test" /> }
        {loaded && <ul>{this.state.image}</ul> }
        {error && <Preload height='100' src={Vita} alt="test" /> }
      </div>
    );
  }
}

export default Preloading;
