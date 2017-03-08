import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import RecipeList from './components/RecipeList';
import { addRecipe, fetchRecipes, removeRecipe } from './actions';

const mapStateToProps = state => (
  {
    recipeMap: state.getIn(['recipes', 'recipeMap'])
  }
);

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    addRecipe, fetchRecipes, removeRecipe
  }, dispatch);

const RecipesListContainer = connect(
  mapStateToProps, mapDispatchToProps
)(RecipeList);

export default RecipesListContainer;
