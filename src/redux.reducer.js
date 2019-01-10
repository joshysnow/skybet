import { combineReducers } from 'redux';
import * as App from './containers/app/redux';
import * as Events from './containers/events/redux';

export default combineReducers({
  app: App.Reducer,
  events: Events.Reducer
});
