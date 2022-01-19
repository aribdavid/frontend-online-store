import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';

import Home from './pages/Home';
import ShoppingCart from './ShoppingCart';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route exact path="/shoppingcart" component={ ShoppingCart } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
