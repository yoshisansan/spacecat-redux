import React from "react";
import styled from 'styled-components';
import Vita from './Vita.jpg';
import spacecat1 from './spacecatImg/spacecat1.jpg';
import spacecat2 from './spacecatImg/spacecat2.jpg';
import spacecat3 from './spacecatImg/spacecat3.jpg';
import spacecat4 from './spacecatImg/spacecat4.jpg';
import spacecat5 from './spacecatImg/spacecat5.jpg';
import spacecat6 from './spacecatImg/spacecat6.jpg';
import spacecat7 from './spacecatImg/spacecat7.jpg';
import spacecat8 from './spacecatImg/spacecat8.jpg';
import spacecat9 from './spacecatImg/spacecat9.jpg';
import spacecat10 from './spacecatImg/spacecat10.jpg';
import spacecat11 from './spacecatImg/spacecat11.jpg';

const spaceCats = [spacecat1, spacecat2, spacecat3, spacecat4, spacecat5, spacecat6, spacecat7, spacecat8, spacecat9, spacecat10, spacecat11 ];

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
    cat: this.props.space,
    final: this.props.final,
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

  preloadImage = src => {
    if (!src) {
      return;
    }
    let gifCat = src[Math.floor(Math.random() * src.length)];
    this.setState({ final: gifCat })

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
    const { loaded, error } = this.state;
    const { bool, shareAction } = this.props;

    // const Items = src.map((list) =>
    //   <Preload height='100' src={list} alt="test" />
    //   );

    // if(loaded === true){
    //   var timerID = setTimeout(() =>{
    //
    //     let Item = Items[Math.floor(Math.random() * Items.length)];
    //     this.setState({ image: Item });
    //     // console.log(this.state.image.props.src);
    //   }, 100);
    // }

    if(bool==="ON"){

      var spaceLoop = setTimeout(()=>{
        let spaceCat = spaceCats[Math.floor(Math.random() * spaceCats.length)];
        this.setState({ cat: spaceCat });
      }, 150);

}else if(bool==="OFF"){

    clearTimeout(spaceLoop);
    //シェアする猫のurlを渡してあげる
    shareAction(this.state.final);

    // let spaceCat = src[Math.floor(Math.random() * src.length)];
    // this.setState({ cat: spaceCat });
    // randomImg(bool);
}

   // const stopLoop = bool =>{
   //   if(bool==="OFF"){
   //     let gifCat = src[Math.floor(Math.random() * src.length)];
   //     this.setState({ cat: gifCat });
   //     // clearTimeout(spaceLoop);
   //   }
   // }
   //
     // this.setState({ cat: Gifcat });
     // let Gifcat = src[Math.floor(Math.random() * src.length)];
     // console.log(Gifcat);
     // this.setState({ cat: Gifcat });

    return (
      <div>
        {!loaded &&
        !error && <Preload height='100' src={Vita} alt="test" /> }
        {loaded && bool === "ON" && <ul><Preload height='100' src={this.state.cat} alt="cat" /></ul> }
        {loaded && bool === "OFF" && <ul><Preload height='100' src={this.state.final} alt="cat" /></ul> }
        {error && <Preload height='100' src={Vita} alt="test" /> }
      </div>
    );
  }

}

export default Preloading;
