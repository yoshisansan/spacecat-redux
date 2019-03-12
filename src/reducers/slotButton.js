const initialState = "ボタン";

const buttonText = (state = initialState, action) => {
  // console.log(action);

  switch (action.type) {
    case "SWITCH_ON":
      return "スロット開始";

    case "SWITCH_OFF":
      return "スロット停止";

    case "WAIT":
      return "wait...";

    default:
      return state;
  }
};

export default buttonText;
