import React from 'react';
import './recipe.scss';

const RecipeItem = React.createClass({
  render() {
    const {
      recipe
    } = this.props;
    return (
      <div className="recipe-item">
        <div className="user-picture">
        </div>
        <div className="recipe-main-info">
          {recipe.get('user')}
          <h2>{recipe.get('name')}</h2>
        </div>
        <div className="recipe-right-info">
          {recipe.get('duration')} min cook
        </div>
      </div>
    );
  }
});

export default RecipeItem;
