import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import './Event.css';

class Event extends PureComponent {
  render() {
    const { name } = this.props;
    return (
      <div className='event'>
        <h2>{name}</h2>
        <div className='event-market'>
          <div className='event-market__col'>
            <h3>WIN</h3>
            <p>1</p>
          </div>
          <div className='event-market__col'>
            <h3>DRAW</h3>
            <p>1</p>
          </div>
          <div className='event-market__col'>
            <h3>WIN</h3>
            <p>1</p>
          </div>
        </div>
      </div>
    );
  }
}

Event.propTypes = {
  name: PropTypes.string.isRequired,
  showMarket: PropTypes.bool,
  showFractions: PropTypes.bool
};

export default Event;
