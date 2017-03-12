import React from 'react';
import IngredientItem from './IngredientItem';

const IngredientList = React.createClass({
  componentWillMount() {
    // fetch once to prepare data
    this.props.fetchIngredients();
  },
  render() {
    const {
      ingredientMap
    } = this.props;

    return (
      <div>
        <div className="ingredient-list">
          {ingredientMap.keySeq().map((ingredientId, key) =>
            <IngredientItem ingredient={ingredientMap.get(ingredientId)}
              ingredientId={ingredientId}
              key={key}/>
          )}
      </div>
      </div>
    );
  }
});


export default IngredientList;
