import React, { Component } from 'react';
import { getCategories } from '../services/api';

export default class Home extends Component {
  constructor() {
    super();

    this.state = {
      categoryList: [],
    };
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

  render() {
    const { categoryList } = this.state;

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
      </div>
    );
  }
}
