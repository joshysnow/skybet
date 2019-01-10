import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import './Event.css';

class Event extends PureComponent {
  renderPrimaryMarket = () => {
    const { markets, outcomes } = this.props;
    if (!markets || !outcomes) return;

    const primaryMarkets = markets.filter(market => market.type === 'win-draw-win');
    if (!primaryMarkets || primaryMarkets.length === 0) return;
    console.log(primaryMarkets);

    const market = primaryMarkets[0];
    const marketOutcomes = outcomes[market.marketId];

    console.log(marketOutcomes);
    const homeOutcome = marketOutcomes.find(outcome => outcome.type === 'home');
    const drawOutcome = marketOutcomes.find(outcome => outcome.type === 'draw');
    const awayOutcome = marketOutcomes.find(outcome => outcome.type === 'away');

    return (
      <div className='event-market'>
        <div className='event-market__col'>
          <h3>WIN</h3>
          {homeOutcome && <p>{homeOutcome.price.decimal}</p>}
        </div>
        <div className='event-market__col'>
          <h3>DRAW</h3>
          {drawOutcome && <p>{drawOutcome.price.decimal}</p>}
        </div>
        <div className='event-market__col'>
          <h3>WIN</h3>
          {awayOutcome && <p>{awayOutcome.price.decimal}</p>}
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
