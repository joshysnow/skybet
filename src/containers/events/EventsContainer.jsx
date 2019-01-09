import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Event from '../../presenters/event';
import EventCollection from '../../presenters/event-collection';

class EventsContainer extends Component {
  componentDidMount() {
    // TODO: Get more detail for each event from API
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
  events: PropTypes.array.isRequired
};

export default connect(null, null)(EventsContainer);
