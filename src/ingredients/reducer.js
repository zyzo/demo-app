import immutable from 'immutable';

import { INGREDIENT } from '../ACTION_TYPES';

const initialState = {
  ingredientMap: {},
  fetched: false
};

const ingredients = (state, action) => {
  switch (action.type) {
    case INGREDIENT.FETCH_INGREDIENTS:
      return state
        .set('ingredientMap', immutable.fromJS(action.ingredientMap))
        .set('fetched', true);
    case INGREDIENT.REMOVE_INGREDIENT:
    default:
      return state;
  }
};

export { initialState };
export default ingredients;
