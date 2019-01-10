import * as Actions from './actions';

const initialState = {
  eventDetails: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case Actions.RECEIVED_EVENT_INFO:
      {
        const { eventDetails } = state;
        eventDetails.push(action.info);
        
        return {
          ...state,
          eventDetails: [...eventDetails]
        };
      }
    default:
      return state;
  }
};
