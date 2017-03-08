import React from 'react';
import { browserHistory } from 'react-router';

const BookmarkItem = React.createClass({
  render() {
    const {
      bookmark, bookmarkId
    } = this.props;
    return (
      <div className="bookmark-item" onClick={() => {
        browserHistory.push(`/bookmark/${bookmarkId}`);
      }}>
        <div className="bookmark-main-info">
          <h4>{bookmark.get('name')}</h4>
        </div>
        <div className="bookmark-right-info">
          <p>{bookmark.get('duration')} min cook</p>
        </div>
        <div className="icon">
          <i className="fa fa-chevron-right" aria-hidden="true"></i>
        </div>
      </div>
    );
  }
});

export default BookmarkItem;
