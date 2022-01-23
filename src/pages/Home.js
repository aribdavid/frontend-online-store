import React from 'react';
import { Link } from 'react-router-dom';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';
import ProductCard from '../components/ProductCard';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      categories: [],
      loading: true,
      products: [],
      searchedItem: '',
      selectedCategory: '',
    };
  }

  componentDidMount() {
    getCategories().then((data) => this.setState({ categories: data, loading: false }));
  }

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
        loading, searchedItem, products } = this.state;
      return (
        <div>
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
                product={ product }
              />
            </div>
          ))}
          <Link data-testid="shopping-cart-button" to="/cart">
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

export default Home;
