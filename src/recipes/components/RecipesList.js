import React from 'react';
import { Button } from 'reactstrap';
import RecipeItem from './RecipeItem';
import './recipeList.css';

const RecipesList = React.createClass({
  render() {
    const {
      recipesList, onAddRecipe
    } = this.props;

    return (
      <div>
        <div className="recipes-list">
          {recipesList.map((recipe, key) =>
            <RecipeItem recipe={recipe} key={key}/>
          )}
        </div>
        <div className="add-recipe-btn">
          <Button color="default" block onClick={onAddRecipe}>Add my recipe</Button>
        </div>
      </div>
    );
  }
});


export default RecipesList;
