import './Event.css';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import  EventMarket, { MarketColumn } from '../event-market';

class Event extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      showMarket: false
    };
  }

  renderMarketPrice = (outcome) => outcome ? this.props.showFractions ? `${outcome.price.num}/${outcome.price.den}` : Number(outcome.price.decimal).toFixed(2) : '';

  renderPrimaryMarket = () => {
    const { markets, outcomes } = this.props;
    if (!markets || !outcomes) return;

    const primaryMarkets = markets.filter(market => market.type === 'win-draw-win');
    if (!primaryMarkets || primaryMarkets.length === 0) return;

    const market = primaryMarkets[0];
    const marketOutcomes = outcomes[market.marketId];

    const homeOutcome = marketOutcomes.find(outcome => outcome.type === 'home');
    const drawOutcome = marketOutcomes.find(outcome => outcome.type === 'draw');
    const awayOutcome = marketOutcomes.find(outcome => outcome.type === 'away');

    return (
      <EventMarket>
        <MarketColumn title={homeOutcome ? 'WIN': '-'} price={this.renderMarketPrice(homeOutcome)} />
        <MarketColumn title={drawOutcome ? 'DRAW': '-'} price={this.renderMarketPrice(drawOutcome)} />
        <MarketColumn title={awayOutcome ? 'WIN': '-'} price={this.renderMarketPrice(awayOutcome)} />
      </EventMarket>
    );
  };

  onShowMarketClick = () => {
    this.setState({showMarket: !this.state.showMarket});
  };

  render() {
    const { name } = this.props;
    const { showMarket } = this.state;

    return (
      <div className='event'>
        <div className='event__header'>
          <h2>{name}</h2>
          <div className='event__header__button' type='button' onClick={this.onShowMarketClick}>
            {showMarket ? 'Hide Market' : 'Show Market'}
          </div>
        </div>
        {this.state.showMarket && this.renderPrimaryMarket()}
      </div>
    );
  }
}

Event.propTypes = {
  name: PropTypes.string.isRequired,
  markets: PropTypes.array,
  outcomes: PropTypes.object,
  showFractions: PropTypes.bool
};

export default Event;
