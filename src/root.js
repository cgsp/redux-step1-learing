import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, hashHistory } from 'react-router';
import 'antd/dist/antd.css';
import { createStore } from 'redux';
import Reducers from './store/reducers';
export default class Root extends React.Component {
  increase() {
    return { type: 'ADD' };
  }

  decrease() {
    return { type: 'SUB' };
  }

  componentDidMount() {
    // 初始化
    let store = createStore(Reducers);
    // 获取
    console.log(store.getState()); // {counter: 0}
    // 触发行为
    store.dispatch(this.increase()); 
    console.log(store.getState()); // {counter: 1}
  }
  render() {
    return (
      <div>
        我是管管
      </div>
    );
  };
}

ReactDOM.render(
  <Root />, document.getElementById('root'));