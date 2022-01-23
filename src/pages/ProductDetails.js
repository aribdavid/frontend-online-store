import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { saveProductItem } from '../services/HandleLocalStorage';

class ProductDetails extends React.Component {
  constructor() {
    super();
    this.state = {
      productDetails: [],
    };
  }

  componentDidMount() {
    const { match } = this.props;
    const url = `https://api.mercadolibre.com/items/${match.params.id}`;
    fetch(url).then((data) => data.json())
      .then((result) => this.setState({ productDetails: result }));
  }

  render() {
    const { productDetails: { title }, productDetails } = this.state;
    return (
      <div>
        <Link data-testid="shopping-cart-button" to="/cart">
          <button
            type="submit"
          >
            Carrinho
          </button>

        </Link>
        <p data-testid="product-detail-name">{title}</p>
        <button
          data-testid="product-detail-add-to-cart"
          type="button"
          name={ title }
          onClick={ () => (saveProductItem(productDetails)) }
        >
          Adicionar Ao Carrinho
        </button>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  match: PropTypes.object,
}.isRequired;

export default ProductDetails;
