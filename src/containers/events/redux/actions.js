import fetch from 'cross-fetch';

export const RECEIVED_EVENT_INFO = 'eventcontainer/received_event_info';
const receivedEventInfo = (info) => {
  return {
    type: RECEIVED_EVENT_INFO,
    info
  };
};

export function fetchEventInfo(id) {
  return dispatch => {
    return fetch(`http://localhost:8888/sportsbook/event/${id}`)
      .then(
        response => response.json(),
        error => console.log(error)
      )
      .then(json => dispatch(receivedEventInfo(json)));
  };
}
