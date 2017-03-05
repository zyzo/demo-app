import React from 'react';
import { connect } from 'react-redux';
import { NavigatorIOS } from 'react-native';

import RecipesList from './components/RecipesList';
import { NavbarStyle } from '../Styles';

const mapStateToProps = state => (
  {
    recipesList: state.getIn(['recipes', 'displayList'])
  }
);

const RecipesListContainer = connect(
  mapStateToProps
)(RecipesList);

export default React.createClass({
  render() {
    return (
      <NavigatorIOS
        ref="nav"
        style={NavbarStyle}
        initialRoute={{
          component: RecipesListContainer,
          title: 'Lists',
          rightButtonTitle: 'Add',
          onRightButtonPress: this.onRightButtonPress
        }}
      />
    );
  }
});
