import initialState from './initialState';

import { reducer as updateGlobalData } from './action-reducer/updateGlobalData';

const allReducers = [
  updateGlobalData
];

export default function reducer(state=initialState, action) {
  let newState;
  switch (action.type) {
  // 其他类型的处理

  default:
    newState = state;
    break;
  }
  return allReducers.reduce((s, r) => r(s, action), newState);
}