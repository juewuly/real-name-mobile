/**
 * author: liuyang9
 * description: 移动端实名认证
 */
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import configStore from 'src/common/configStore';
import App from './app';
import { UPDATE_POPUP_DATA } from 'src/redux/constants';
import Config from './config';

const store = configStore();

export default class RealNameMobile {
  constructor() {
    this.init();
  }

  static get Instance() {
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

    renderApp(App);
  }

  show() {
    store.dispatch({
      type: UPDATE_POPUP_DATA,
      data: {
        show: true
      }
    });
  }

  /**
   * 年龄小于8周岁的提示
   */
  showEight() {
    const { title, subTitle, content } = Config.pay.ageLessThanEight;
    updatePopupData({
      show: true,
      title,
      subTitle,
      content
    });
  }

  /**
   * 8~16周岁不可充值，充值已达到上限的提示
   */
  showSixteen() {
    const { title, subTitle, content } = Config.pay.ageLessThanSixteen;
    updatePopupData({
      show: true,
      title,
      subTitle,
      content
    });
  }

  /**
   * 8~16周岁可充值，但充值金额达到上限的提示
   * @param {*} amount 剩余可充值的额度
   */
  showSixteenCharge(amount) {
    const { title, subTitle, content } = Config.pay.ageLessThanSixteenCharge;
    updatePopupData({
      show: true,
      title,
      subTitle,
      subTitle2: `该游戏本月还可充值${amount}元`,
      content
    });    
  }

  /**
   * 8~16周岁不可充值，充值已达到上限的提示
   */
  showEighteen() {
    const { title, subTitle, content } = Config.pay.ageLessThanEighteen;
    updatePopupData({
      show: true,
      title,
      subTitle,
      content
    });
  }

  /**
   * 8~16周岁可充值，但充值金额已达到上限的提示
   * @param {*} amount 
   */
  showEighteenCharge(amount) {
    const { title, subTitle, content } = Config.pay.ageLessThanEighteenCharge;
    updatePopupData({
      show: true,
      title,
      subTitle,
      subTitle2: `该游戏本月还可充值${amount}元`
    });
  }

  close() {
    store.dispatch({
      type: UPDATE_POPUP_DATA,
      data: {
        show: false
      }
    });
  }
}

const updatePopupData = data => {
  store.dispatch({
    type: UPDATE_POPUP_DATA,
    data
  });
}


const renderApp = Component => {
  render(
    <AppContainer>
      <Provider store={store}>
        <Component />
      </Provider>
    </AppContainer>,
    document.getElementById('real-name-mobile')
  );
}

if (module.hot) {
  module.hot.accept('./app', () => {
    const App = require('./app').default;
    renderApp(App);
  });
}