import immutable from 'immutable';
import { combineReducers } from 'redux-immutable';

import recipes, { initialState as recipesInitialState } from './recipes/reducer';
import bookmarks, { initialState as bookmarksInitialState } from './bookmarks/reducer';

export const initialState = immutable.fromJS(
  {
    recipes: recipesInitialState,
    bookmarks: bookmarksInitialState
  }
);


export default combineReducers({
  recipes,
  bookmarks
});
