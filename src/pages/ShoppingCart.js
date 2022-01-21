import React from 'react';

class ShoppingCart extends React.Component {
  removeDuplicates = (array) => array.filter((elem, index) => array.indexOf(elem) === index);

   itemQuantity = (arr, val) => arr.reduce((counter, item) => (item === val ? counter + 1 : counter), 0);

   render() {
     return (
       <div>
         Meus Produtos
         {this.removeDuplicates(this.props.cartProducts).map((item) => (
           <div key={ item }>
             <p data-testid="shopping-cart-product-name">{item}</p>
             <p data-testid="shopping-cart-product-quantity">
               Quantidade:
               {' '}
               {this.itemQuantity(this.props.cartProducts, item)}
             </p>
           </div>
         )) }
       </div>
     );
   }
}

export default ShoppingCart;
