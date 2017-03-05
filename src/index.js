import React from 'react';
import { Provider } from 'react-redux';

import RecipesListContainer from './recipes/container';
import configureStore from './configureStore';
import initialState from './initialState';

const App = React.createClass({
  render() {
    const store = configureStore(initialState);
    return (
      <Provider store={store}>
        <RecipesListContainer/>
      </Provider>
    );
  }
});

export default App;
