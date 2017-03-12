import immutable from 'immutable';

import { RECIPE } from '../ACTION_TYPES';

const initialState = {
  recipeMap: {
    1: {
      user: 'Trinh Thuy',
      name: 'Bun bo',
      duration: 10
    },
    2: {
      user: 'An Dang',
      name: 'Bun bo',
      duration: 20
    }
  }
};

const recipes = (state, action) => {
  switch (action.type) {
    case RECIPE.FETCH_RECIPES:
      return state.set('recipeMap', immutable.fromJS(action.recipesMap));
    case RECIPE.FETCH_RECIPE_ITEM:
      return state.setIn(['recipeMap', action.recipeId], immutable.fromJS(action.recipe));
    default:
      return state;
  }
};

export { initialState };
export default recipes;
