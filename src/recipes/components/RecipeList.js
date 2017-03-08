import React from 'react';
import RecipeItem from './RecipeItem';
import './RecipeList.css';

const RecipeList = React.createClass({
  componentWillMount() {
    // fetch once to prepare data
    this.props.fetchRecipes();
  },
  render() {
    const {
      recipeMap, removeRecipe
    } = this.props;

    return (
      <div>
        {/* <div className="add-recipe-btn">
          <Button color="default" block onClick={addRecipe}>Add my recipe</Button>
        </div>*/}
        <div className="recipes-list">
          {recipeMap.keySeq().map((recipeId, key) =>
            <RecipeItem recipe={recipeMap.get(recipeId)}
              emoveRecipe={() => removeRecipe(recipeId)}
              recipeId={recipeId}
              key={key}/>
          )}
      </div>
      </div>
    );
  }
});


export default RecipeList;
