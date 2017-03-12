import immutable from 'immutable';
import { combineReducers } from 'redux-immutable';

import recipes, { initialState as recipesInitialState } from './recipes/reducer';
import bookmarks, { initialState as bookmarksInitialState } from './bookmarks/reducer';
import ingredients, { initialState as ingredientsInitialState } from './ingredients/reducer';

export const initialState = immutable.fromJS(
  {
    recipes: recipesInitialState,
    bookmarks: bookmarksInitialState,
    ingredients: ingredientsInitialState
  }
);


export default combineReducers({
  recipes,
  bookmarks,
  ingredients
});
