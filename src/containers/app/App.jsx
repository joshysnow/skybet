import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Redux from './redux';
import './App.css';

import EventsContainer from '../events';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkedFractions: false
    };
  }

  componentDidMount() {
    this.props.fetchLiveFootballEvents();
  }

  onCheck = () => {
    this.setState({checkedFractions: !this.state.checkedFractions});
  };

  render() {
    const { events } = this.props;

    return (
      <div className='app'>
        <div className='header'>
          <h1>SkyBet</h1>
        </div>
        <div className='options'>
          <div className='toggle__fractions'>
            <input type='checkbox' checked={this.state.checkedFractions} onChange={this.onCheck} />
            <span>{'Show Fractions'}</span>
          </div>
        </div>
        <EventsContainer events={events} showFractions={this.state.checkedFractions} />
      </div>
    );
  }
}

App.propTypes = {
  events: PropTypes.array.isRequired
};

export default connect(Redux.mapStateToProps, Redux.mapDispatchToProps)(App);
