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

export const removeRecipe = (key) => dispatch => {
  recipesRef.child(key).remove().then(() => {
    dispatch(fetchRecipes());
  }).catch(error => {
    console.log(error);
  });
};

export const addRecipe = () => {
  recipesRef.push({
    user: 'Boon map',
    name: 'Croquette',
    duration: 10
  });
  return fetchRecipes();
};

export default addRecipe;
