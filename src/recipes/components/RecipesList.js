import React from 'react';
import { Button } from 'reactstrap';
import RecipeItem from './RecipeItem';
import './recipeList.css';

const RecipesList = React.createClass({
  componentWillMount() {
    // fetch once to prepare data
    // this.props.fetchRecipes();
  },
  render() {
    const {
      recipesMap, addRecipe, removeRecipe
    } = this.props;

    return (
      <div>
        <div className="recipes-list">
          {recipesMap.valueSeq().map((recipe, key) =>
            <RecipeItem recipe={recipe} removeRecipe={removeRecipe} key={key}/>
          )}
        </div>
        <div className="add-recipe-btn">
          <Button color="default" block onClick={addRecipe}>Add my recipe</Button>
        </div>
      </div>
    );
  }
});


export default RecipesList;
