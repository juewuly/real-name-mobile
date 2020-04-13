/**
 * author: liuyang9
 * description: 实名认证移动端sdk
 */

import RealNameMobile from './real-name-mobile';
import Config from './real-name-mobile/config';

export default class RealNameMobileSdk {
  constructor() {
    if (!RealNameMobileSdk._instance) {
      RealNameMobileSdk._instance = RealNameMobile.Instance;
    }

    return RealNameMobileSdk._instance;
  }

  /**
   * 获取单例
   */
  static get Instance() {
    if (!this._instance) {
      this._instance = RealNameMobile.Instance;
    }

    return this._instance;
  }

  /**
   * 获取相关提示信息的配置
   */
  static get Config() {
    return Config;
  }
}