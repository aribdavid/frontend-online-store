import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { saveProductItem } from '../services/HandleLocalStorage';

class ProductDetails extends React.Component {
  constructor() {
    super();
    this.state = {
      productDetails: [],
      savedEvals: [],
      email: '',
      rating: '',
      evaluation: '',

    };
  }

  componentDidMount() {
    const { match } = this.props;
    const url = `https://api.mercadolibre.com/items/${match.params.id}`;
    fetch(url).then((data) => data.json())
      .then((result) => this.setState({ productDetails: result }));
    this.getEvaluations();
  }

  getEvaluations = () => {
    const result = [];
    Object.keys(localStorage).filter((key) => key.includes('@')).forEach((key) => {
      result.push(JSON.parse(localStorage.getItem(key)));
    });
    this.setState({ savedEvals: result });
  }

  handleForm = (event) => {
    const { email, rating, evaluation } = this.state;
    event.preventDefault();
    const result = { email, rating, evaluation };
    localStorage.setItem(email,
      JSON.stringify(result));
  }

  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value,
    });
  }

  render() {
    const { productDetails: { title }, productDetails, savedEvals } = this.state;
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
        <div>
          <h2>Avaliações</h2>
          <form>
            <label htmlFor="input-email">
              Email
              <input
                id="input-email"
                name="email"
                type="email"
                data-testid="product-detail-email"
                onChange={ this.handleChange }
              />
            </label>
            <label
              htmlFor="rating"
              onChange={ this.handleChange }
            >
              <input type="radio" name="rating" value="1" data-testid="1-rating" />
              <input type="radio" name="rating" value="2" data-testid="2-rating" />
              <input type="radio" name="rating" value="3" data-testid="3-rating" />
              <input type="radio" name="rating" value="4" data-testid="4-rating" />
              <input type="radio" name="rating" value="5" data-testid="5-rating" />
            </label>
            <label htmlFor="input-eval">
              Mensagem
              <textarea
                name="evaluation"
                data-testid="product-detail-evaluation"
                onChange={ this.handleChange }
              />
            </label>
            <button
              type="submit"
              data-testid="submit-review-btn"
              onClick={ this.handleForm }
            >
              Enviar
              {' '}

            </button>
          </form>
        </div>
        <div>
          {savedEvals.map((elem) => (
            <div key={ elem.email }>
              <p>{elem.email}</p>
              <p>{elem.rating}</p>
              <p>{elem.evaluation}</p>
            </div>
          ))}
        </div>
        <Link to="/cart">
          <button
            type="submit"
          >
            Carrinho
          </button>

        </Link>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  match: PropTypes.object,
}.isRequired;

export default ProductDetails;
