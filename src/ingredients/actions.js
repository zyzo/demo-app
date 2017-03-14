import firebase from 'firebase';
import { INGREDIENT } from '../ACTION_TYPES';

const ingredientsRef = firebase.database().ref('ingredients');
export const fetchIngredients = () => dispatch => {
  ingredientsRef.once('value').then((snapshot) => {
    const ingredientMap = {};
    snapshot.forEach(ingredient => {
      ingredientMap[ingredient.key] = ingredient.val();
    });
    dispatch({
      type: INGREDIENT.FETCH_INGREDIENTS,
      ingredientMap
    });
  });
};

export const removeRecipe = (key) => dispatch => {
  ingredientsRef.child(key).remove().then(() => {
    dispatch(fetchIngredients());
  }).catch(error => {
    console.log(error);
  });
};
