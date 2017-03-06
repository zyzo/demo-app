import { connect } from 'react-redux';
import _ from 'lodash';

import RecipesList from './components/RecipesList';
import { addRecipe, fetchRecipes, removeRecipe } from './actions';

const mapStateToProps = state => (
  {
    recipesList: state.getIn(['recipes', 'displayList'])
  }
);

const mapDispatchToProps = dispatch => (
  {
    onAddRecipe: _.flowRight(dispatch, addRecipe),
    fetchRecipes: _.flowRight(dispatch, fetchRecipes),
    removeRecipe: _.flowRight(dispatch, removeRecipe)
  }
);

const RecipesListContainer = connect(
  mapStateToProps, mapDispatchToProps
)(RecipesList);

export default RecipesListContainer;
