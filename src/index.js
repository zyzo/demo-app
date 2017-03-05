import React from 'react';
import { Provider } from 'react-redux';

import RecipesList from './recipes/component.js';
import configureStore from './configureStore';
import initialState from './initialState';

const App = React.createClass({
  render() {
    const store = configureStore(initialState);
    return (
      <Provider store={store}>
        <RecipesList/>
      </Provider>
    );
  }
});

export default App;
