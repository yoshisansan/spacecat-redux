import Vita from "./Vita.jpg";

const initialState = Vita; 

const gifReceiver = (state = initialState, action) => {
  switch (action.type) {
    case "GET_GIF":
      return action.payload;

    default:
      return state;
  }
};

export default gifReceiver;
