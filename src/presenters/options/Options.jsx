import './Options.css';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Options extends PureComponent {
  onFractionsCheck = (evt) => {
    const { onOptionChange } = this.props;
    if (onOptionChange) onOptionChange();
  };

  render() {
    return (
      <div className='options'>
        <div className='toggle__fractions'>
          <input type='checkbox' checked={this.props.checkFractions} onChange={this.onFractionsCheck} />
          <p>{'Fractions'}</p>
        </div>
      </div>
    );
  }
}

Options.propTypes = {
  checkFractions: PropTypes.bool.isRequired,
  onOptionChange: PropTypes.func
};

export default Options;
