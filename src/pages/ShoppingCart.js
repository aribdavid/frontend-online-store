import React from 'react';
import { Link } from 'react-router-dom';
import { getProductItem } from '../services/HandleLocalStorage';
import CartButtons from '../components/CartButtons';

class ShoppingCart extends React.Component {
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
        if(cartItems.length === 0)
        <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
        else
        {
          cartItems.map((item) => (
            <div key={ Math.random() }>
              <button type="button">X</button>
              <p data-testid="shopping-cart-product-name">{item.title}</p>
              <CartButtons />
            </div>))
        }
        <Link to="/checkout" data-testid="checkout-products">
          <button type="button">Checkout</button>
        </Link>
      </div>
    );
  }
}

export default ShoppingCart;
