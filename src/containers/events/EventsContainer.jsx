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
    const { events, eventDetails, showFractions } = this.props;
    if (eventDetails) console.log(eventDetails);

    return events.map((event) => {
      const info = eventDetails.filter(info => info.event.eventId === event.eventId);
      const markets = (info !== undefined && info.length > 0) ? info[0].markets[event.eventId] : undefined;
      const outcomes = (info !== undefined && info.length > 0) ? info[0].outcomes : undefined;

      return (
        <Event key={`${event.eventId}`} name={event.name} markets={markets} outcomes={outcomes} showFractions={showFractions} />
      );
    });
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
  showFractions: PropTypes.bool
};

export default connect(Redux.mapStateToProps, Redux.mapDispatchToProps)(EventsContainer);
