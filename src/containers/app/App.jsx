import './App.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Redux from './redux';
import EventsContainer from '../events';
import Options from '../../presenters/options'

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
        <Options checkFractions={this.props.useFractions} onOptionChange={this.props.toggleFractions} />
        <EventsContainer events={events} showFractions={this.props.useFractions} />
      </div>
    );
  }
}

App.propTypes = {
  useFractions: PropTypes.bool.isRequired,
  events: PropTypes.array.isRequired,
  fetchLiveFootballEvents: PropTypes.func.isRequired,
  toggleFractions: PropTypes.func.isRequired
};

export default connect(Redux.mapStateToProps, Redux.mapDispatchToProps)(App);
