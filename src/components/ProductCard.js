import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { saveProductItem } from '../services/HandleLocalStorage';

class ProductCard extends React.Component {
  render() {
    const { productImg, productName, productPrice, productId, product } = this.props;
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
        <button
          type="button"
          data-testid="product-add-to-cart"
          name={ productName }
          onClick={ () => (saveProductItem(product)) }
        >
          Adicionar Ao Carrinho
        </button>
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
