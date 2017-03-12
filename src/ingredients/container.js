import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import IngredientList from './components/IngredientList';
import { fetchIngredients, removeIngredient } from './actions';

const mapStateToProps = state => (
  {
    ingredientMap: state.getIn(['ingredients', 'ingredientMap'])
  }
);

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    fetchIngredients, removeIngredient
  }, dispatch);

const IngredientsListContainer = connect(
  mapStateToProps, mapDispatchToProps
)(IngredientList);

export default IngredientsListContainer;
