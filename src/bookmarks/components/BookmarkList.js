import React from 'react';
import BookmarkItem from './BookmarkItem';

const BookmarkList = React.createClass({
  componentWillMount() {
    this.props.fetchBookmarks();
  },
  render() {
    const {
      bookmarkMap, recipesMap
    } = this.props;
    return (
      <div>
        {/* <div className="add-recipe-btn">
          <Button color="default" block onClick={addBookmark}>Add my recipe</Button>
        </div>*/}
        <div className="bookmark-list">
          {bookmarkMap.keySeq().map((bookmarkId, key) => {
            const bookmark = bookmarkMap.get(bookmarkId);
            return (
              <BookmarkItem
                bookmark={bookmark}
                recipe={recipesMap.get(bookmark.get('recipeId'))}
                bookmarkId={bookmarkId}
                key={key}/>
            );
          })}
      </div>
      </div>
    );
  }
});


export default BookmarkList;
