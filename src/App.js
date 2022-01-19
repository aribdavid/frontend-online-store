import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom/cjs/react-router-dom.min';

import './App.css';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <div>
              <p data-testid="home-initial-message">
                Digite algum termo de pesquisa ou escolha uma categoria.
              </p>
            </div>
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
