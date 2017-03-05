import { combineReducers } from 'redux-immutable';

import recipes from './recipes/reducer';

export default combineReducers({
  recipes
});
