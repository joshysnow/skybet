import fetch from 'cross-fetch';

export const RECEIVED_EVENT_INFO = 'eventcontainer/received_event_info';
const receivedEventInfo = (info) => {
  return {
    type: RECEIVED_EVENT_INFO,
    info: Object.assign({}, info);
  }
};

export function fetchEventInfo(id) {
  return dispatch => {
    return fetch(`http://localhost:8888/event/${id}`)
      .then(
        response => response.json(),
        error => console.log(error)
      )
      .then(json => dispatch(receivedEvents(json)));
  };
}
