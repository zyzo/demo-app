import React from 'react';
import { Row, Col } from 'reactstrap';
import moment from 'moment';
import { browserHistory } from 'react-router';

import './BookmarkItem.css';

const BookmarkItem = React.createClass({
  render() {
    const {
      bookmark, bookmarkId
    } = this.props;

    return (
      <div className="bookmark-item">
        <Row className="bookmark-item" onClick={() => {
          browserHistory.push(`/bookmark/${bookmarkId}`);
        }}>
          <Col xs="6" className="bookmark-date">
            {moment(bookmark.get('date')).fromNow()}
          </Col>
          <Col xs="6" className="bookmark-duration">
            <p>{bookmark.get('duration')} min cook</p>
          </Col>
        </Row>
        <Row>
          <Col xs={{ size: 11, offset: 1 }}>
            <h4>{bookmark.get('meal')}</h4>
            <p className="bookmark-note">{bookmark.get('note')}</p>
          </Col>
        </Row>
      </div>
    );
  }
});

export default BookmarkItem;
