import React from 'react';
import PropTypes from 'prop-types';

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
    const { productDetails: { title } } = this.state;
    return (
      <p data-testid="product-detail-name">{title}</p>
    );
  }
}

ProductDetails.propTypes = {
  match: PropTypes.object,
}.isRequired;

export default ProductDetails;
