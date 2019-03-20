const initialState = [];

const gifListReceiver = (state = initialState, action) => {

  switch (action.type) {
    case "GIF_LIST":
      return action.payload;

    default:
      return state;
  }
};

export default gifListReceiver;
