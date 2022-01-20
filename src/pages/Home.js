import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CardProd from '../components/CardProd';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';

export default class Home extends Component {
  constructor() {
    super();

    this.state = {
      categoryList: [],
      campoDeBusca: '',
      notFoundProduct: false,
      productList: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.getProducts = this.getProducts.bind(this);
    this.checkReturnAPI = this.checkReturnAPI.bind(this);
  }

  componentDidMount() {
    getCategories().then((cat) => {
      this.setState({
        categoryList: cat,
      });
    });
  }

  handleClick = (event) => {
    event.preventDefault();
    const { history } = this.props;
    history.push('/ShoppingCart');
  }

  handleChange({ target }) {
    this.setState({
      [target.name]: target.value,
    });
  }

  getProducts = async () => {
    const { campoDeBusca } = this.state;

    await getProductsFromCategoryAndQuery('$CATEGORY_ID', campoDeBusca)
      .then((prod) => {
        this.setState({
          productList: prod,
        });
      });

    this.checkReturnAPI();
  }

  checkReturnAPI() {
    const { productList } = this.state;
    if (productList.length === 0) {
      this.setState({
        notFoundProduct: true,
      });
    } else {
      this.setState({
        notFoundProduct: false,
      });
    }
  }

  render() {
    const { categoryList, campoDeBusca, notFoundProduct, productList } = this.state;

    return (
      <div>
        <h1 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma
          categoria.

        </h1>
        <button
          data-testid="shopping-cart-button"
          type="submit"
          onClick={ this.handleClick }
        >
          Carrinho de compras
        </button>

        <input
          data-testid="query-input"
          type="text"
          name="campoDeBusca"
          value={ campoDeBusca }
          onChange={ this.handleChange }
        />

        <button
          data-testid="query-button"
          type="button"
          onClick={ this.getProducts }
        >
          Buscar
        </button>

        <div>
          <span>Categorias:</span>
          {categoryList
            .map((cat) => (
              <ul key={ cat.id }>
                {/* <button
                      data-testid="category"
                      type="button"
                      name="btnCategory"
                    >
                      {cat.name}
                    </button> */}
                <label htmlFor="radioCategory">
                  <input
                    data-testid="category"
                    type="radio"
                    name="radioCategory"
                    value={ cat.name }
                  />
                  { cat.name }
                </label>
              </ul>
            ))}
        </div>
        {notFoundProduct ? (
          <span>Nenhum produto foi encontrado</span>
        ) : (
          productList
            .filter((nProd) => nProd.title.toLowerCase().includes(campoDeBusca))
            .map((prod) => (
              <span key={ prod.id }>
                <CardProd
                  titleProd={ prod.title }
                  imageProd={ prod.thumbnail }
                  priceProd={ prod.price }
                />
              </span>
            ))
        )}

      </div>
    );
  }
}

Home.propTypes = {
  // Source: https://stackoverflow.com/questions/52109592/react-router-the-prop-history-is-undefined
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};
