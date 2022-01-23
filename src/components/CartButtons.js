import React from 'react';

class CartButtons extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 1,
    };
  }

  increaseCounter = () => {
    const { counter } = this.state;
    if (counter >= 0) {
      this.setState((prevState) => ({ counter: prevState.counter + 1 }));
    }
  }

  decreaseCounter = () => {
    const { counter } = this.state;
    if (counter > 0) {
      this.setState((prevState) => ({ counter: prevState.counter - 1 }));
    }
    if (counter < 0) {
      this.setState({ counter: 0 });
    }
  }

  render() {
    const { counter } = this.state;
    return (
      <>
        <p data-testid="shopping-cart-product-quantity">
          {counter}
        </p>
        <button
          type="button"
          onClick={ this.increaseCounter }
          data-testid="product-increase-quantity"
        >
          +
        </button>
        <button
          type="button"
          onClick={ this.decreaseCounter }
          data-testid="product-decrease-quantity"
        >
          -
        </button>
      </>
    );
  }
}

export default CartButtons;
