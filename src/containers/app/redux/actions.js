import fetch from 'cross-fetch';

export const RECEIVED_EVENTS = 'app/received_events';
const receivedEvents = (data) => {
  const events = data ? data.events : [];
  return {
    type: RECEIVED_EVENTS,
    events
  };
};

export const TOGGLE_FRACTIONS = 'app/toggle_fractions';
export function toggleFractions() {
  return {
    type: TOGGLE_FRACTIONS
  };
}

export function fetchLiveFootballEvents() {
  return dispatch => {
    return fetch('http://localhost:8888/football/live')
      .then(
        response => response.json(),
        error => console.log(error)
      )
      .then(json => dispatch(receivedEvents(json)));
  };
}
