import immutable from 'immutable';

import { RECIPE } from '../ACTION_TYPES';

const initialState = {
  recipeMap: {},
  fetched: false
};

const recipes = (state, action) => {
  switch (action.type) {
    case RECIPE.FETCH_RECIPES:
      return state
        .set('recipeMap', immutable.fromJS(action.recipesMap))
        .set('fetched', true);
    case RECIPE.FETCH_RECIPE_ITEM:
      return state.setIn(['recipeMap', action.recipeId], immutable.fromJS(action.recipe));
    default:
      return state;
  }
};

export { initialState };
export default recipes;
