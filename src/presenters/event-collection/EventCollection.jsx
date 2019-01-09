import React, { PureComponent } from 'react';
import './EventCollection.css';

class EventCollection extends PureComponent {
  render() {
    return (
      <div className='event-consumer'>
        {this.props.children}
      </div>
    );
  }
}

export default EventCollection;
