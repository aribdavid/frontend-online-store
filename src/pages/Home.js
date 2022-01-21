import React from 'react';
import { Link } from 'react-router-dom';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';
import ProductCard from '../components/ProductCard';
import ShoppingCart from './ShoppingCart';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      categories: [],
      loading: true,
      products: [],
      searchedItem: '',
      selectedCategory: '',
      cartProducts: [],
    };
  }

  componentDidMount() {
    getCategories().then((data) => this.setState({ categories: data, loading: false }));
  }

  handleClick = ({ target }) => {
    this.setState((prevState) => (
      { cartProducts: [...prevState.cartProducts, target.name] }
    ));
  };

    listProducts = () => {
      const { selectedCategory, searchedItem } = this.state;
      getProductsFromCategoryAndQuery(selectedCategory, searchedItem)
        .then((data) => this.setState({ products: data.results }));
    }

    handleChange = ({ target: { value, name } }) => {
      this.setState({ [name]: value });
    }

    handleChangeCategory = ({ target: { id, name } }) => {
      this.setState({ [name]: id }, this.listProducts);
    }

    render() {
      const { categories,
        loading, searchedItem, products, cartProducts, carregando } = this.state;
      return (
        <div>
          <Link data-testid="shopping-cart-button" to="/cart">About</Link>
          <p data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>
          <input
            data-testid="query-input"
            type="search"
            name="searchedItem"
            onChange={ this.handleChange }
            value={ searchedItem }

          />
          <button
            data-testid="query-button"
            type="button"
            onClick={ this.listProducts }
          >
            Pesquisar
          </button>
          <ul>
            {loading === false && categories.map((category) => (
              <li key={ category.id }>
                <label htmlFor={ category.id }>
                  <input
                    type="radio"
                    data-testid="category"
                    id={ category.id }
                    name="selectedCategory"
                    value={ category.id }
                    onChange={ this.handleChangeCategory }
                  />
                  {category.name}
                </label>
              </li>
            ))}
          </ul>
          {products.map((product) => (
            <div key={ product.id }>
              <ProductCard
                productName={ product.title }
                productImg={ product.thumbnail }
                productPrice={ product.price }
                productId={ product.id }
              />
              <button
                type="button"
                data-testid="product-add-to-cart"
                name={ product.title }
                onClick={ this.handleClick }
              >
                Adicionar Ao Carrinho
              </button>
            </div>
          ))}
          {cartProducts.length !== 0 ? <ShoppingCart cartProducts={ cartProducts } /> : <p>Seu Carrinho Está Vazio</p>}
        </div>
      );
    }
}

export default Home;
