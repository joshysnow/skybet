import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './redux.reducer';

const middleware = [
  thunk
];

const composedMiddleware = compose(
  applyMiddleware(...middleware)
);

const initialState = {};

const Store = createStore(
  rootReducer,
  initialState,
  composedMiddleware
);

export default Store;
