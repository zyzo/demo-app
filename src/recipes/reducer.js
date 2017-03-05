export const initialState = {
  displayList: [
    {
      id: 1,
      user: 'Trinh Thuy',
      name: 'Bun bo',
      time: 10
    },
    {
      id: 2,
      user: 'An Dang',
      name: 'Bun bo',
      time: 20
    }
  ]
};

const recipes = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default recipes;
