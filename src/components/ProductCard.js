import React from 'react';
import PropTypes from 'prop-types';

class ProductCard extends React.Component {
  render() {
    const { productImg, productName, productPrice } = this.props;
    return (
      <div data-testid="product">
        <h1>{productName}</h1>
        <img src={ productImg } alt={ productName } />
        <p>{productPrice}</p>
      </div>
    );
  }
}

ProductCard.propTypes = {
  productName: PropTypes.string,
  productImg: PropTypes.string,
  productPrice: PropTypes.number,
}.isRequired;

export default ProductCard;
