import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AddBookmark from '../components/AddBookmark';
import { addBookmark } from '../actions';

const mapStateToProps = (state, ownProps) => (
  {
    selectedRecipe: state.getIn(['recipes', 'recipesMap', ownProps.recipeId])
  }
);

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    addBookmark
  }, dispatch);

const AddBookmarkContainer = connect(
  mapStateToProps, mapDispatchToProps
)(AddBookmark);

export default AddBookmarkContainer;
