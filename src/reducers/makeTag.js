const initialState = "うう";

const makeTag = (state = initialState, action) => {
  switch (action.type) {
    case "TAG":
      return action.payload;

    default:
      return state;
  }
};

export default makeTag;
