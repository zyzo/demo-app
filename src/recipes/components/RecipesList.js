import React from 'react';
import RecipeItem from './RecipeItem';

const RecipesList = React.createClass({
  render() {
    const {
      recipesList
    } = this.props;
    return (
      <div>
        {recipesList.map((recipe, key) =>
          <RecipeItem recipe={recipe} key={key}/>
        )}
      </div>
    );
  }
});


export default RecipesList;
