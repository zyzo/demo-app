import firebase from 'firebase';
import { BOOKMARK } from '../ACTION_TYPES';

const bookmarksRef = firebase.database().ref('bookmarks');

export const fetchBookmarks = () => dispatch => {
  bookmarksRef.once('value').then((snapshot) => {
    const bookmarkMap = {};
    snapshot.forEach(bookmark => {
      bookmarkMap[bookmark.key] = bookmark.val();
    });
    dispatch({
      type: BOOKMARK.FETCH_BOOKMARKS,
      bookmarkMap
    });
  });
};
export const addBookmark = bookmark => dispatch => {
  bookmarksRef.push(bookmark);
  dispatch({
    type: BOOKMARK.ADD_BOOKMARK,
    bookmark
  });
};
