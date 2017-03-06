import React from 'react';
import { Button } from 'reactstrap';
import './recipeItem.css';

const RecipeItem = React.createClass({
  render() {
    const {
      recipe, removeRecipe, recipeKey
    } = this.props;
    return (
      <div className="recipe-item">
        <div className="recipe-user-picture">
          <div className="user-picture"></div>
        </div>
        <div className="recipe-main-info">
          {recipe.get('user')}
          <h4>{recipe.get('name')}</h4>
        </div>
        <div className="recipe-right-info">
          <p>{recipe.get('duration')} min cook</p>
        </div>
        <div className="icon">
          <i className="fa fa-chevron-right" aria-hidden="true"></i>
        </div>
        <Button className="remove-btn" color="danger" size="sm"
          onClick={() => removeRecipe(recipeKey)}>
          Remove
        </Button>
      </div>
    );
  }
});

export default RecipeItem;
