const initialState = "READY";

const tweetData = (state = initialState, action) => {
  // console.log(action);

  switch (action.type) {
    case "TWEET_ON":
      return "ON";

    case "TWEET_OFF":
      return "OFF";

    default:
      return state;
  }
};

export default tweetData;
