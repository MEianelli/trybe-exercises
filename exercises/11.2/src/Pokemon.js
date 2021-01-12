import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Pokemon extends Component {
  render() {
    return (
      <div className='card'>
        <div className='text'>
          <p>{this.props.pokemon.name}</p>
          <p>{this.props.pokemon.type}</p>
          <p>
            Average Weight: {this.props.pokemon.averageWeight.value}
            {this.props.pokemon.averageWeight.measurementUnit}
          </p>
        </div>

        <img src={this.props.pokemon.image} alt={this.props.pokemon.name} />
      </div>
    );
  }
}

Pokemon.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.number,
  measurementUnit: PropTypes.string,
};

export default Pokemon;
