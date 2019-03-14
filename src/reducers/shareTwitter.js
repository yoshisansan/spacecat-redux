const initialState = "Wait...Share";

const shareTwitter = (state = initialState, action) => {
  switch (action.type) {
    case "SHARE":
      return action.payload;

    default:
      return state;
  }
};

export default shareTwitter;
