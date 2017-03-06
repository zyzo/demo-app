import immutable from 'immutable';

import { RECIPE } from '../ACTION_TYPES';

export const initialState = {
  displayList: [
    {
      id: 1,
      user: 'Trinh Thuy',
      name: 'Bun bo',
      duration: 10
    },
    {
      id: 2,
      user: 'An Dang',
      name: 'Bun bo',
      duration: 20
    }
  ]
};

const recipes = (state, action) => {
  switch (action.type) {
    case RECIPE.FETCH_RECIPES:
      return state.set('displayList', immutable.fromJS(action.recipes));
    default:
      return state;
  }
};

export default recipes;
