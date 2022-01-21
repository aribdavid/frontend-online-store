import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import './App.css';
import ShoppingCart from './pages/ShoppingCart';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/cart" component={ ShoppingCart } />
          <Route
            path="/productdetails/:id"
            render={ (propsRoute) => (
              <ProductDetails { ...propsRoute } />
            ) }
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
