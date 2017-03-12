import React from 'react';
import { browserHistory } from 'react-router';
import { Button } from 'reactstrap';

const IngredientItem = React.createClass({
  render() {
    const {
      ingredient, removeIngredient, ingredientId
    } = this.props;
    return (
      <div className="ingredient-item" onClick={() => {
        browserHistory.push(`/add_bookmark/${ingredientId}`);
      }}>
        <div className="ingredient-user-picture">
          <div className="user-picture"></div>
        </div>
        <div className="ingredient-main-info">
          {ingredient.get('user')}
          <h4>{ingredient.get('name')}</h4>
        </div>
        <div className="ingredient-right-info">
          <p>{ingredient.get('duration')} min cook</p>
        </div>
        <div className="icon">
          <i className="fa fa-chevron-right" aria-hidden="true"></i>
        </div>
        <Button className="remove-btn" color="danger" size="sm"
          onClick={removeIngredient}>
          Remove
        </Button>
      </div>
    );
  }
});

export default IngredientItem;
