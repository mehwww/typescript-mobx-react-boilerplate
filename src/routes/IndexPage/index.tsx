import React, { Component } from 'react';
import styled from 'styled-components';

const Root = styled.div`
  font-family: Georgia, sans-serif;
  margin-top: 3em;
  text-align: center;

  .title {
    font-size: 2.5rem;
    font-weight: normal;
    letter-spacing: -1px;
  }

  .welcome {
    height: 328px;
    background: url(${require('@/assets/yay.jpg')}) no-repeat center 0;
    background-size: 388px 328px;
  }

  .list {
    font-size: 1.2em;
    margin-top: 1.8em;
    list-style: none;
    line-height: 1.5em;
  }

  .list code {
    background: #f7f7f7;
  }
`;

interface IndexPageProps {}
interface IndexPageState {}

class IndexPage extends Component<IndexPageProps, IndexPageState> {
  render() {
    return (
      <Root>
        <h1 className="title">Yay! Welcome!</h1>
        <div className="welcome" />
        <ul className="list">
          <li>To get started, edit <code>src/index.js</code> and save to reload.</li>
        </ul>
      </Root>
    );
  }
}

export default IndexPage;