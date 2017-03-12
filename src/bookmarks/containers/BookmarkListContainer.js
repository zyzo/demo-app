import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchBookmarks } from '../actions';
import BookmarkList from '../components/BookmarkList';

const BookmarkListContainer = connect(
  state => ({
    bookmarkMap: state.getIn(['bookmarks', 'bookmarkMap']),
    recipesMap: state.getIn(['recipes', 'recipeMap'])
  }),
  dispatch => bindActionCreators({
    fetchBookmarks
  }, dispatch)
)(BookmarkList);

export default BookmarkListContainer;
