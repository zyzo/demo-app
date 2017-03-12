import React from 'react';
import { browserHistory } from 'react-router';

import BookmarkListContainer from '../bookmarks/containers/BookmarkListContainer';
import IngredientListContainer from '../ingredients/container';

import './ShoplistNavComponent.css';

const ShoplistNavComponent = React.createClass({
  handleNav(e) {
    e.preventDefault();
    browserHistory.push(`/shoplist/${e.currentTarget.getAttribute('data-step-id')}`);
  },
  render() {
    const subRoute = this.props.params.subRoute || 'bookmarks';
    const Component = subRoute === 'bookmarks' ? BookmarkListContainer : IngredientListContainer;
    return (
      <div className="shoplist-page">
        <ul className="nav nav-justified nav-underline">
          <li className="nav-item"
            data-step-id="bookmarks" onClick={this.handleNav}>
            <a className={`nav-link${subRoute === 'bookmarks' ? ' active' : ''}`}
              href="#">Saved Meals</a>
          </li>
          <li className="nav-item"
            data-step-id="ingredients" onClick={this.handleNav}>
            <a className={`nav-link${subRoute === 'ingredients' ? ' active' : ''}`}
              href="#">Shopping List</a>
          </li>
        </ul>
        <div className="shoplist-component-wrapper">
          <Component />
        </div>
      </div>
    );
  }
});

export default ShoplistNavComponent;
