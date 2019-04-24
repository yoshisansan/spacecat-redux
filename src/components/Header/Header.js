import React, { Component } from 'react';
import styled from 'styled-components';

const HeaderTitle = styled.div`
  font-family: 'Noto Sans TC', sans-serif;

    .title{
    color: white;
    font-size: 13rem;
    white-space:nowrap;

  }

  @media only screen and (max-width: 323px)  {
    .title{
      font-size: 7rem;
    }
  }

  @media only screen and (min-width: 324px) and (max-width: 1024px)  {
    .title{
      font-size: 7.8rem;
    }
  }

`

export default class Header extends Component {

  render() {
    return(
       <HeaderTitle><h1 className="title">宇宙猫</h1></HeaderTitle>
    );
  }
}
