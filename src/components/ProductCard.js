import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProductCard extends React.Component {
  render() {
    const { productImg, productName, productPrice, productId } = this.props;
    return (
      <div data-testid="product">
        <Link
          data-testid="product-detail-link"
          to={ `/productdetails/${productId}` }
        >
          {productName}
        </Link>
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
