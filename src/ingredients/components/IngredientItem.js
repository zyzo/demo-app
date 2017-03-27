import React from 'react';

import './IngredientItem.css';

const IngredientItem = React.createClass({
  render() {
    const {
      ingredient, selected, onClick
    } = this.props;
    return (
      <div className={
        `ingredient-item${selected ? ' selected' : ''}`}
        onClick={onClick}>
        <div style={{ float: 'right', color: '#999' }}>{ingredient.getIn(['recipe', 'bookmark', 'date'])}</div>
        <input type="checkbox" checked={!!selected}/>
        <span className="ingredient-item-name">{ingredient.get('name')}</span>
        <div style={{ color: '#999' }}>{ingredient.getIn(['recipe', 'name'])}</div>
        <div className="clearfix"></div>
      </div>
    );
  }
});

export default IngredientItem;
