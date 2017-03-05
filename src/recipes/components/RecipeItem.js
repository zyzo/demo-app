import React from 'react';
import './recipeItem.css';

const RecipeItem = React.createClass({
  render() {
    const {
      recipe
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
      </div>
    );
  }
});

export default RecipeItem;
