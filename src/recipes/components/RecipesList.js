import React from 'react';
import { connect } from 'react-redux';
import {
  ListView, Text, View, TouchableOpacity
} from 'react-native';

import RecipeItem from './RecipeItem';

const RecipesList = React.createClass({
  navigateToItem(row) {
    const nextRoute = {
      component: RecipesItem,
      title: row.name,
      passProps: { item: row }
    };
    this.props.navigator.push(nextRoute);
  },
  render() {
    const {
      recipesList
    } = this.props;
    const dataSource = new ListView.DataSource(
      {
        rowHasChanged: (r1, r2) => r1.id !== r2.id
      }
    ).cloneWithRows(recipesList.toJS());
    return (
      <ListView dataSource={dataSource}
        renderRow={
        row => (
          <TouchableOpacity onPress={() => this.navigateToItem(row)}>
            <RecipeItem row={row}/>
          </TouchableOpacity>
        )}
      />
    );
  }
});

const mapStateToProps = state => (
  {
    recipesList: state.getIn(['recipes', 'displayList'])
  }
);

const RecipesListContainer = connect(
  mapStateToProps
)(RecipesList);

export { RecipesList };
export default RecipesListContainer;
