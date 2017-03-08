import firebase from 'firebase';
import { BOOKMARK } from '../ACTION_TYPES';

const bookmarksRef = firebase.database().ref('bookmarks');
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
