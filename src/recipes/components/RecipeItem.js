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
          {recipe.get('duration')} min cook
        </div>
        <Button color="link" size="sm" onClick={() => removeRecipe(recipeKey)}>-</Button>
      </div>
    );
  }
});

export default RecipeItem;
