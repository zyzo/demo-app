import firebase from 'firebase';
import { BOOKMARK } from '../ACTION_TYPES';

const bookmarksRef = firebase.database().ref('bookmarks');

export const fetchBookmarks = () => dispatch => {
  bookmarksRef.once('value').then((snapshot) => {
    const bookmarkMap = {};
    snapshot.forEach(recipe => {
      bookmarkMap[recipe.key] = recipe.val();
    });
    dispatch({
      type: BOOKMARK.FETCH_BOOKMARKS,
      bookmarkMap
    });
  });
};
export const addBookmark = bookmark => dispatch => {
  const newBookmark = bookmarksRef.push();
  newBookmark.set({
    name: bookmark.date,
    note: bookmark.note
  });
  dispatch({
    type: BOOKMARK.ADD_BOOKMARK,
    bookmark
  });
};
