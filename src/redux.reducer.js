import { combineReducers } from 'redux';
import { Reducer } from './containers/app/redux';

export default combineReducers({
  app: Reducer
});
