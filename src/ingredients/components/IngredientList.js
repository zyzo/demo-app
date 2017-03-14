import React from 'react';
import IngredientItem from './IngredientItem';

const IngredientList = React.createClass({
  getInitialState() {
    return {
      selectedItems: {}
    };
  },
  componentWillMount() {
    // fetch once to prepare data
    this.props.fetchIngredients();
  },
  render() {
    const {
      ingredientMap
    } = this.props;
    const selectedItems = this.state.selectedItems;
    return (
      <div>
        <div className="ingredient-list">
          {ingredientMap.keySeq().map((ingredientId, key) =>
            <IngredientItem ingredient={ingredientMap.get(ingredientId)}
              ingredientId={ingredientId}
              key={key}
              selected={selectedItems[ingredientId]}
              onClick={() => {
                selectedItems[ingredientId] = !selectedItems[ingredientId];
                this.setState({ selectedItems });
              }}
              />
          )}
      </div>
      </div>
    );
  }
});


export default IngredientList;
