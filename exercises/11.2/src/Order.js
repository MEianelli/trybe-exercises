import React from 'react';
import PropTypes from 'prop-types';

class Order extends React.Component {
  render() {
    const { user, product, price } = this.props.order;

    return (
      <div className='order'>
        <p>
          {' '}
          {user} bought {product} for {price.value} {price.currency}{' '}
        </p>
      </div>
    );
  }
}

Order.prototype = {
  user: PropTypes.string.isRequired,
};

Order.defaultProps = {
  user: 'MULA',
};

export default Order;
