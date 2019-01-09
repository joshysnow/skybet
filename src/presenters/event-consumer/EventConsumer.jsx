import React, { PureComponent } from 'react';
import './EventConsumer.css';

import Event from '../event';

class EventConsumer extends PureComponent {
  renderEvents = () => {
    const { data } = this.props;
    return data.map((event) => <Event key={`${event.eventId}`} id={event.eventId} name={event.name}/>);
  };

  render() {
    return (
      <div className='event-consumer'>
        {this.renderEvents()}
      </div>
    );
  }
}

export default EventConsumer;
