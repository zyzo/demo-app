import immutable from 'immutable';

import { initialState as recipesInitialState } from './recipes/reducer';
import { initialState as bookmarksInitialState } from './bookmarks/reducer';

const initialState = immutable.fromJS(
  {
    recipes: recipesInitialState,
    bookmarks: bookmarksInitialState
  }
);

export default initialState;
