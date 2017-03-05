import immutable from 'immutable';

import { initialState as recipesInitialState } from './recipes/reducer';

const initialState = immutable.fromJS(
  {
    recipes: recipesInitialState
  }
);

export default initialState;
