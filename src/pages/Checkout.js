import React from 'react';
import { getProductItem } from '../services/HandleLocalStorage';

class Checkout extends React.Component {
  constructor() {
    super();
    this.state = {
      cartItems: [],
    };
  }

  componentDidMount() {
    this.GetCartItems();
  }

  GetCartItems =() => {
    const items = getProductItem();
    this.setState({ cartItems: items });
  }

  render() {
    const { cartItems } = this.state;
    return (
      <div>
        {cartItems.map((item) => (
          <div key={ Math.random() }>
            <p data-testid="shopping-cart-product-name">{item.title}</p>
            <p>{item.price}</p>

          </div>))}
        <form>
          <label htmlFor="fullname">
            <input
              id="fullname"
              data-testid="checkout-fullname"
              type="text"
            />
          </label>
          <label htmlFor="checkout-email">
            <input
              id="checkout-email"
              type="email"
              data-testid="checkout-email"
            />
          </label>
          <label htmlFor="checkout-cpf">
            <input
              id="checkout-cpf"
              type="string"
              data-testid="checkout-cpf"
            />
          </label>
          <label htmlFor="checkout-phone">
            <input
              id="checkout-phone"
              type="tel"
              data-testid="checkout-phone"
            />
          </label>
          <label htmlFor="checkout-cep">
            <input
              id="checkout-cep"
              type="text"
              data-testid="checkout-cep"
            />
          </label>
          <label htmlFor="checkout-address">
            <input
              id="checkout-address"
              type="text"
              data-testid="checkout-address"
            />
          </label>
        </form>
        <button type="button">Comprar</button>
      </div>
    );
  }
}

export default Checkout;
