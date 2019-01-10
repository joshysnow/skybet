import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import './Event.css';

class Event extends PureComponent {
  renderMarketPrice = (outcome) => <p>{outcome ? this.props.showFractions ? `${outcome.price.num}/${outcome.price.den}` : outcome.price.decimal : '-'}</p>;

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
      <div className='event-market'>
        <div className='event-market__col'>
          <h3>WIN</h3>
          {this.renderMarketPrice(homeOutcome)}
        </div>
        <div className='event-market__col'>
          <h3>DRAW</h3>
          {this.renderMarketPrice(drawOutcome)}
        </div>
        <div className='event-market__col'>
          <h3>WIN</h3>
          {this.renderMarketPrice(awayOutcome)}
        </div>
      </div>
    );
  };

  render() {
    const { name } = this.props;

    return (
      <div className='event'>
        <h2>{name}</h2>
        {this.renderPrimaryMarket()}
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
