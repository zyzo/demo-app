import { connect } from 'react-redux';

import BookmarkList from '../components/BookmarkList';

const BookmarkListContainer = connect(
  state => ({
    bookmarkMap: state.getIn(['bookmarks', 'bookmarkMap'])
  })
)(BookmarkList);

export default BookmarkListContainer;
