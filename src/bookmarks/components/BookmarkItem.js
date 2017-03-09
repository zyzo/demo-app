import React from 'react';
import moment from 'moment';

import './BookmarkItem.css';

const BookmarkItem = React.createClass({
  render() {
    const {
      bookmark
    } = this.props;

    return (
      <div className="bookmark-item">
        <div className="bookmark-date">
          {moment(bookmark.get('date')).fromNow()}
        </div>
        <p className="bookmark-duration">{bookmark.get('duration')} min cook</p>
        <h4>{bookmark.get('meal')}</h4>
        <p className="bookmark-note">{bookmark.get('note')}</p>
      </div>
    );
  }
});

export default BookmarkItem;
