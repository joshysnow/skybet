import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Redux from './redux';
import './App.css';

import EventsContainer from '../events';

class App extends Component {
  componentDidMount() {
    this.props.fetchLiveFootballEvents();
  }

  render() {
    const { events } = this.props;

    return (
      <div className='app'>
        <div className='header'>
          <h1>SkyBet</h1>
        </div>
        <div className='options'>
          <div className='odds-toggle'>
            <input type='checkbox' />
            <span>{'Fractional Odds'}</span>
          </div>
        </div>
        <EventsContainer events={events} />
      </div>
    );
  }
}

App.propTypes = {
  events: PropTypes.array.isRequired
};

export default connect(Redux.mapStateToProps, Redux.mapDispatchToProps)(App);
