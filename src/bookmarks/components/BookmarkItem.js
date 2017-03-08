import React from 'react';
import moment from 'moment';
import firebase from 'firebase';
import { browserHistory } from 'react-router';

import './BookmarkItem.css';

const recipesRef = firebase.database().ref('recipes');
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
          <h4>{bookmark.get('meal')}</h4>
          <p>{moment(bookmark.get('date')).fromNow()}</p>
          <p>{bookmark.get('name')}</p>
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
