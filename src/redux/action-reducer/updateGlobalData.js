import { fromJS } from 'immutable';
import { UPDATE_GLOBAL_DATA } from '../constants';

const INDEX = 'global';

export const updateGlobalData = data => dispatch => dispatch({
  type: UPDATE_GLOBAL_DATA,
  data
});

export const reducer = (state, action) => {
  switch (action.type) {
  case UPDATE_GLOBAL_DATA:
    return state.mergeIn([INDEX], fromJS(action.data));
  default:
    return state;
  }
}