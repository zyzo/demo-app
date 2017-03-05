import React from 'react';
import RecipeItem from './RecipeItem';
import './recipeList.css';

const RecipesList = React.createClass({
  render() {
    const {
      recipesList
    } = this.props;
    return (
      <div className="recipes-list">
        {recipesList.map((recipe, key) =>
          <RecipeItem recipe={recipe} key={key}/>
        )}
      </div>
    );
  }
});


export default RecipesList;
