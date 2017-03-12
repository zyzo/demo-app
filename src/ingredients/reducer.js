import immutable from 'immutable';

import { RECIPE } from '../ACTION_TYPES';

const initialState = {
  ingredientMap: {
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

const ingredients = (state, action) => {
  switch (action.type) {
    case RECIPE.FETCH_INGREDIENT:
      return state.set('ingredientMap', immutable.fromJS(action.ingredientsMap));
    case RECIPE.REMOVE_INGREDIENT:
    default:
      return state;
  }
};

export { initialState };
export default ingredients;
