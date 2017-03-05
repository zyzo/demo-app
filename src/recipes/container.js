import { connect } from 'react-redux';

import RecipesList from './components/RecipesList';

const mapStateToProps = state => (
  {
    recipesList: state.getIn(['recipes', 'displayList'])
  }
);

const RecipesListContainer = connect(
  mapStateToProps
)(RecipesList);

export default RecipesListContainer;
