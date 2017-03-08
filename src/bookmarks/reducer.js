import immutable from 'immutable';

import { BOOKMARK } from '../ACTION_TYPES';

const initialState = {
  recipeBookmarks: {
    1: {
      recipeId: '1',
      time: 'lunch',
      note: 'Thuy beo map dung co nhin nua'
    },
    2: {
      recipeId: '2',
      time: 'dinner'
    }
  }
};

const bookmarks = (state, action) => {
  switch (action.type) {
    case BOOKMARK.ADD_TO_BOOKMARK:
    default:
      return state;
  }
};

export { initialState };
export default bookmarks;
