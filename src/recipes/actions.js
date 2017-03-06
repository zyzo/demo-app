import firebase from 'firebase';
import { RECIPE } from '../ACTION_TYPES';

const recipesRef = firebase.database().ref('recipes');
export const fetchRecipes = () => dispatch => {
  recipesRef.once('value').then((snapshot) => {
    const recipesMap = {};
    snapshot.forEach(recipe => {
      recipesMap[recipe.key] = recipe.val();
    });
    dispatch({
      type: RECIPE.FETCH_RECIPES,
      recipesMap
    });
  });
};

export const removeRecipe = () => {
  recipesRef.child(0).remove();
  return fetchRecipes();
};

export const addRecipe = () => {
  const newRecipe = recipesRef.push();
  newRecipe.set({
    user: 'Boon map',
    name: 'Croquette',
    duration: 10
  });
  return fetchRecipes();
};

export default addRecipe;
