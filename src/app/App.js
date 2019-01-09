import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Redux from './redux';
import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.fetchLiveFootballEvents();
  }

  render() {
    return (
      <div className='app'>
        <div className='header'>
          <h1>SkyBet</h1>
        </div>
        <div className='events'>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  events: PropTypes.array.isRequired
};

export default connect(Redux.mapStateToProps, Redux.mapDispatchToProps)(App);
