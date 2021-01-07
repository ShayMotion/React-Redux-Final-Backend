const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case "SET_MY_GUITARS":
      return action.guitars;
    case "ADD_GUITAR":
      return state.concat(action.guitar);
    case "UPDATE_GUITAR":
      return state.map((guitar) =>
        guitar.id === action.guitar.id ? action.guitar : guitar
      );
    case "DELETE_GUITAR":
      return state.filter((guitar) =>
        guitar.id === action.guitarId ? false : true
      );
    case "CLEAR_GUITARS":
      return initialState;
    default:
      return state;
  }
};
