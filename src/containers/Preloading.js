import { connect } from "react-redux";

import Preloading from "../components/Preloading/Preloading";
import { boolActionPreloading, preloadTag, shareAction } from '../action';

const mapStateToProps = state => {
  // console.log(state.gifReceiver);
  return {
    preloadingBool: state.preloadingBool,
    makeTag: state.makeTag
  };
};

const mapDispatchToProps = dispatch => {
  return {
    // shareAction: urlList => {
    //   dispatch(shareAction(urlList));
    // },
    preloadTag: Item => {
      dispatch(preloadTag(Item));
    },

  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Preloading);
