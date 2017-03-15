import { connect } from 'react-redux';
import _ from 'lodash';
import { List } from 'immutable';
import { bindActionCreators } from 'redux';
import IngredientList from './components/IngredientList';
import { fetchIngredients, removeIngredient } from './actions';

const mapStateToProps = state => {
  const ingredientMap = state.getIn(['ingredients', 'ingredientMap']);
  const recipeMap = state.getIn(['recipes', 'recipeMap']);
  const bookmarkMap = state.getIn(['bookmarks', 'bookmarkMap']);

  const displayedIngredientIds =
    bookmarkMap
    .map(bookmark => recipeMap.get(bookmark.get('recipeId')).set('bookmark', bookmark))
    .reduce((acc, recipe) => acc.concat(recipe
      .get('ingredients')
      .filter(_.isNumber)
      .map(ingredientId => ingredientMap.get(ingredientId.toString()).set('recipe', recipe))),
      List()
    );

  console.log(displayedIngredientIds.toJS())

  return {
    ingredientMap: displayedIngredientIds
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
