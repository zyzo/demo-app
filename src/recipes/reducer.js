import immutable from 'immutable';

import { RECIPE } from '../ACTION_TYPES';

const initialState = {
  recipesMap: {
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
      return state.set('recipesMap', immutable.fromJS(action.recipesMap));
    default:
      return state;
  }
};

export { initialState };
export default recipes;
