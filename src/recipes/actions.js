import _ from 'lodash';
import firebase from 'firebase';
import { RECIPE } from '../ACTION_TYPES';

const recipesRef = firebase.database().ref('recipes');
export const fetchRecipes = () => dispatch => {
  recipesRef.once('value').then((snapshot) => {
    // hacky way to convert map => list
    // the right way would be to store data as map in store
    const list = [];
    snapshot.forEach(recipe => {
      const val = recipe.val();
      if (_.isObject(val)) {
        list.push(recipe.val());
      }
    });
    dispatch({
      type: RECIPE.FETCH_RECIPES,
      recipes: list
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
    id: 1,
    user: 'Boon map',
    name: 'Croquette',
    duration: 10
  });
  return fetchRecipes();
};

export default addRecipe;
