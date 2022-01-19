import React, { Component } from 'react';

export default class Home extends Component {
  handleClick = (event) => {
    event.preventDefault();
    const {history} = this.props;
    history.push('/ShoppingCart');
  }
  render() {
    return (
      <div>
        <h1 data-testid="home-initial-message">Digite algum termo de pesquisa ou escolha uma
      categoria.</h1>
        <button
          data-testid="shopping-cart-button"
          type="submit"
          onClick={ this.handleClick }
          >
            Carrinho de compras
        </button>
      </div>
    )
  }
  
}
