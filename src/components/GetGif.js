import React from "react";
import styled from 'styled-components';

const Img = styled.img`
    width: 40rem;
    height: 40rem;
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
    const { urlList } = this.props;
    return (
      <Img src={urlList} alt="test" key={urlList} />
    );
  }
}