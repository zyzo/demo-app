import React from 'react';
import RecipeItem from './RecipeItem';
import './recipeList.css';

const RecipesList = React.createClass({
  componentWillMount() {
    // fetch once to prepare data
    this.props.fetchRecipes();
  },
  render() {
    const {
      recipesMap, removeRecipe
    } = this.props;

    return (
      <div>
        {/* <div className="add-recipe-btn">
          <Button color="default" block onClick={addRecipe}>Add my recipe</Button>
        </div>*/}
        <div className="recipes-list">
          {recipesMap.keySeq().map((key, id) =>
            <RecipeItem recipe={recipesMap.get(key)} removeRecipe={removeRecipe}
              key={id} recipeKey={key}/>
          )}
      </div>
      </div>
    );
  }
});


export default RecipesList;
