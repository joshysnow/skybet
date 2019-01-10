import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Redux from './redux';
import Event from '../../presenters/event';
import EventCollection from '../../presenters/event-collection';

class EventsContainer extends Component {
  componentDidUpdate(oldProps) {
    const { events, fetchEventInfo } = this.props;
    const oldEvents = oldProps.events;

    if (oldEvents.length !== events.length){
      for (let event of events) {
        fetchEventInfo(event.eventId);
      }
    }
  }

  renderEvents = () => {
    const { events } = this.props;
    return events.map((event) => <Event key={`${event.eventId}`} name={event.name} />);
  };

  render() {
    return (
      <EventCollection>
        {this.renderEvents()}
      </EventCollection>
    );
  }
}

EventsContainer.propTypes = {
  events: PropTypes.array.isRequired,
  eventDetails: PropTypes.array.isRequired,
  useFractionals: PropTypes.bool
};

export default connect(Redux.mapStateToProps, Redux.mapDispatchToProps)(EventsContainer);
