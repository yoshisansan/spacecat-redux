import { connect } from "react-redux";

import Preloading from "../components/Preloading/Preloading";
import { boolActionPreloading, preloadTag } from '../action';

const mapStateToProps = state => {
  // console.log(state.gifReceiver);
  return {
    preloadingBool: state.preloadingBool,
    makeTag: state.makeTag
  };
};

const mapDispatchToProps = dispatch => {
  return {
    shareAction: flag => {
      dispatch(boolActionPreloading(flag));
    },
    preloadTag: Item => {
      dispatch(preloadTag(Item));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Preloading);
