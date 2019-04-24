const initialState = "READY";

const preloadingBool = (state = initialState, action) => {
  switch (action.type) {
    case "FLAG_PRELOAD":
      return action.payload;

    default:
      return state;
  }
};

export default preloadingBool;
