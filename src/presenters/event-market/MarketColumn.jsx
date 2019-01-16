import './MarketColumn.css';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class MarketColumn extends PureComponent {
  render() {
    const { title, price } = this.props;

    return (
      <div className='market__col'>
        <h3>{title}</h3>
        {price && <p>{price}</p>}
      </div>
    );
  }
}

MarketColumn.props = {
  title: PropTypes.string.isRequired,
  price: PropTypes.any
};

export default MarketColumn;
