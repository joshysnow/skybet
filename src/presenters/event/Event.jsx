import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import './Event.css';

class Event extends PureComponent {
  render() {
    const { name } = this.props;
    return (
      <div className='event'>
        <h2>{name}</h2>
      </div>
    );
  }
}

Event.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired
};

export default Event;
