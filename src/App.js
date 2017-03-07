// @flow

import React from 'react';
import {
  Router, Route, browserHistory
} from 'react-router';
import { Provider } from 'react-redux';

import RecipesListContainer from './recipes/container';
import AddToCooklistContainer from './addToCooklist/container';
import configureStore from './configureStore';
import initialState from './initialState';

const App = React.createClass({
  render() {
    const store = configureStore(initialState);
    return (
      <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={RecipesListContainer}/>
            <Route path="/add_to_cooklist/:recipeId" component={AddToCooklistContainer} />
        </Router>
      </Provider>
    );
  }
});

export default App;
