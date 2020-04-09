/**
 * author: liuyang9
 * description: 移动端实名认证
 */
import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Modal } from 'components';

import './index.less';

export default class RealNameMobile {
  constructor() {
    this.init();
  }

  static getInstance() {
    if(!this._instance) {
      this._instance = new RealNameMobile();
    }

    return this._instance;
  }

  init() {
    this.root = document.createElement('div');
    this.root.setAttribute('id', 'real-name-mobile');
    this.modalRoot = document.createElement('div');
    this.modalRoot.setAttribute('id', 'real-name-mobile-modal');
    document.getElementsByTagName('body')[0].append(this.root);
    document.getElementsByTagName('body')[0].append(this.modalRoot);
  }

  show() {
    renderApp(Test);
  }
}

const Test = () => (<div><Modal><div>test</div></Modal></div>)

const renderApp = Component => {
  render(
    <AppContainer>
      <Component />
    </AppContainer>, 
    document.getElementById('real-name-mobile')
  );
}