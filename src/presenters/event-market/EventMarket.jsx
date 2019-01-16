import './EventMarket.css';
import React, { PureComponent } from 'react';

class EventMarket extends PureComponent {
  render() {
    return (
      <div className='event-market'>
        {this.props.children}
      </div>
    );
  }
}

export default EventMarket;
