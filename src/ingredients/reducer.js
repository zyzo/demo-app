import immutable from 'immutable';

import { RECIPE } from '../ACTION_TYPES';

const initialState = {
  ingredientMap: {},
  fetched: false
};

const ingredients = (state, action) => {
  switch (action.type) {
    case RECIPE.FETCH_INGREDIENT:
      return state
        .set('ingredientMap', immutable.fromJS(action.ingredientsMap))
        .set('fetched', true);
    case RECIPE.REMOVE_INGREDIENT:
    default:
      return state;
  }
};

export { initialState };
export default ingredients;
