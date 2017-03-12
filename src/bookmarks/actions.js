import firebase from 'firebase';
import { BOOKMARK, RECIPE } from '../ACTION_TYPES';

const bookmarksRef = firebase.database().ref('bookmarks');
const recipesRef = firebase.database().ref('recipes');

export const fetchBookmarks = () => dispatch => {
  bookmarksRef.once('value').then((snapshot) => {
    const bookmarkMap = {};
    snapshot.forEach(bookmark => {
      const val = bookmark.val();
      bookmarkMap[bookmark.key] = val;
      recipesRef.child(val.recipeId).once('value').then((recipeSnapshot) => {
        dispatch({
          type: RECIPE.FETCH_RECIPE_ITEM,
          recipeId: val.recipeId,
          recipe: recipeSnapshot.val()
        });
      });
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
