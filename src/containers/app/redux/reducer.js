import * as Actions from './actions';

const initialState = {
  events: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case Actions.RECEIVED_EVENTS:
      return {
        ...state,
        events: action.events
      }
    default:
      return state;
  }
};
