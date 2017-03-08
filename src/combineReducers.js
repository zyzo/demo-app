import { combineReducers } from 'redux-immutable';

import recipes from './recipes/reducer';
import bookmarks from './bookmarks/reducer';

export default combineReducers({
  recipes,
  bookmarks
});
