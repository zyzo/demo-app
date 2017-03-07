import { connect } from 'react-redux';

import AddToCooklist from './components/AddToCooklist';

const mapStateToProps = (state, ownProps) => (
  {
    selectedRecipe: state.getIn(['recipes', 'recipesMap', ownProps.recipeId])
  }
);

const AddToCooklistContainer = connect(
  mapStateToProps
)(AddToCooklist);

export default AddToCooklistContainer;
