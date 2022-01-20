import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CardProd extends Component {
  render() {
    const {
      titleProd,
      imageProd,
      priceProd,
    } = this.props;

    return (
      <div data-testid="product">
        <h4>
          {titleProd}
        </h4>

        <img
          data-testid="product"
          src={ imageProd }
          alt={ titleProd }
        />

        <span>
          {priceProd}
        </span>
      </div>
    );
  }
}

CardProd.propTypes = {
  titleProd: PropTypes.string.isRequired,
  imageProd: PropTypes.string.isRequired,
  priceProd: PropTypes.number.isRequired,
};
