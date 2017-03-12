import React from 'react';
import BookmarkItem from './BookmarkItem';

const BookmarkList = React.createClass({
  componentWillMount() {
    this.props.fetchBookmarks();
  },
  render() {
    const {
      bookmarkMap
    } = this.props;
    return (
      <div>
        {/* <div className="add-recipe-btn">
          <Button color="default" block onClick={addBookmark}>Add my recipe</Button>
        </div>*/}
        <div className="bookmark-list">
          {bookmarkMap.keySeq().map((bookmarkId, key) =>
            <BookmarkItem bookmark={bookmarkMap.get(bookmarkId)}
              bookmarkId={bookmarkId}
              key={key}/>
          )}
      </div>
      </div>
    );
  }
});


export default BookmarkList;
