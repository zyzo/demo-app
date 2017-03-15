import { connect } from 'react-redux';
import _ from 'lodash';
import { bindActionCreators } from 'redux';
import IngredientList from './components/IngredientList';
import { fetchIngredients, removeIngredient } from './actions';

const mapStateToProps = state => {
  const ingredientMap = state.getIn(['ingredients', 'ingredientMap']);
  const recipeMap = state.getIn(['recipes', 'recipeMap']);
  const bookmarkMap = state.getIn(['bookmarks', 'bookmarkMap']);

  const toBuyIngredients =
    bookmarkMap
    .map(bookmark => recipeMap.get(bookmark.get('recipeId')).set('bookmark', bookmark))
    .map(recipe => recipe.get('ingredients'))
    .flatten()
    .filter(_.isNumber)
    .map(ingredientId => ingredientMap.get(ingredientId.toString()));
  return {
    ingredientMap: toBuyIngredients
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    fetchIngredients, removeIngredient
  }, dispatch);

const IngredientsListContainer = connect(
  mapStateToProps, mapDispatchToProps
)(IngredientList);

export default IngredientsListContainer;
