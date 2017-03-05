import React from 'react';
import { NavigatorIOS, View } from 'react-native';

import RecipesList from './components/RecipesList';

const RecipesListContainer = React.createClass({
  render() {
    return (
      <NavigatorIOS
        ref="nav"
        initialRoute={{
          component: RecipesList,
          title: 'Lists',
          rightButtonTitle: 'Add',
          onRightButtonPress: this.onRightButtonPress
        }}
      />
    );
  }
});

export default RecipesListContainer;
