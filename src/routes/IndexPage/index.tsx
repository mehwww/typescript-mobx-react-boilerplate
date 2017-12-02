import React, { Component } from 'react';
import styled from 'styled-components';
import { inject, observer } from 'mobx-react';
import { GlobalStore } from '@/store';

const Root = styled.div`
  font-family: Georgia, sans-serif;
  margin-top: 3em;
  text-align: center;

  .title {
    font-size: 2.5rem;
    font-weight: normal;
    letter-spacing: -1px;
    color: red;
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

interface IndexPageStore {
  globalStore?: GlobalStore;
}
interface IndexPageProps {
  className?: string;
  style?: React.CSSProperties;
}
interface IndexPageState {}

@inject('globalStore')
@observer
class IndexPage extends Component<IndexPageProps & IndexPageStore, IndexPageState> {
  interval: NodeJS.Timer;

  componentDidMount() {
    this.interval = setInterval(() => {
      this.props.globalStore!.addOne();
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { className, style, globalStore } = this.props;
    return (
      <Root className={className} style={style}>
        <h1 className="title">Yay! Welcome!!!</h1>
        <h1 className="title">{globalStore!.count}</h1>
        <div className="welcome" />
        <ul className="list">
          <li>To get started, edit <code>src/index.js</code> and save to reload.</li>
        </ul>
      </Root>
    );
  }
}

export default IndexPage;
