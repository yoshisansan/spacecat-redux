const initialState = true;

const bool = (state = initialState, action) => {
  switch (action.type) {
    case "FLAG":
      return action.payload;

    default:
      return state;
  }
};

export default bool;
