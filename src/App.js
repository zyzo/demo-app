// @flow

import React from 'react';
import {
  Router, Route, browserHistory
} from 'react-router';
import { Provider } from 'react-redux';

import RecipesListContainer from './recipes/container';
import AddBookmarkContainer from './bookmarks/containers/AddBookmarkContainer';
import ShoplistNavComponent from './nav/ShoplistNavComponent';
import configureStore from './configureStore';

const App = React.createClass({
  render() {
    const store = configureStore();
    return (
      <Provider store={store} className="react-root">
        <Router history={browserHistory}>
            <Route path="/" component={RecipesListContainer}/>
            <Route path="/add_bookmark/:recipeId" component={AddBookmarkContainer} />
            <Route path="/shoplist/:subRoute" component={ShoplistNavComponent} />
            <Route path="/shoplist" component={ShoplistNavComponent} />
        </Router>
      </Provider>
    );
  }
});

export default App;
