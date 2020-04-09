import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Modal, Tip } from 'components';

import './index.less';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  render() {
    return (
      <Modal>
        <Tip
         title='根据相关部门对于未成年用户监管要求'
         subTitle='该账号不能充值游戏'
         subTitle2=''
         content='根据《关于防止未成年人沉迷网络游戏的通知》，网络游戏企业不得为未满8周岁以下用户提供游戏付费服务。' />
      </Modal>
    );
  }
}

export default Home;