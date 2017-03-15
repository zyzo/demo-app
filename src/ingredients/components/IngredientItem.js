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
        <input type="checkbox" checked={!!selected}/>
        <span className="ingredient-item-name">{ingredient.get('name')}</span>
        <div style={{ color: '#999' }}>{ingredient.getIn(['recipe', 'name'])}</div>
      </div>
    );
  }
});

export default IngredientItem;
