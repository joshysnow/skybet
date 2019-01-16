import * as Actions from './actions';

const initialState = {
  events: [],
  useFractions: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case Actions.RECEIVED_EVENTS:
      return {
        ...state,
        events: action.events
      };
    case Actions.TOGGLE_FRACTIONS:
      return {
        ...state,
        useFractions: !state.useFractions
      };
    default:
      return state;
  }
};
