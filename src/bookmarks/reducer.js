import { BOOKMARK } from '../ACTION_TYPES';

const initialState = {
  bookmarkMap: {
    1: {
      recipeId: '1',
      date: 1489013667,
      meal: 'lunch',
      note: 'Thuy beo map dung co nhin nua'
    },
    2: {
      recipeId: '2',
      date: 1489013667,
      meal: 'dinner'
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
