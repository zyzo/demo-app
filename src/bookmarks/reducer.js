import immutable from 'immutable';
import { BOOKMARK } from '../ACTION_TYPES';

const initialState = {
  bookmarkMap: {},
  fetched: false
};

const bookmarks = (state, action) => {
  switch (action.type) {
    case BOOKMARK.FETCH_BOOKMARKS:
      return state
        .set('bookmarkMap', immutable.fromJS(action.bookmarkMap))
        .set('fetched', true);
    case BOOKMARK.ADD_TO_BOOKMARK:
    default:
      return state;
  }
};

export { initialState };
export default bookmarks;
