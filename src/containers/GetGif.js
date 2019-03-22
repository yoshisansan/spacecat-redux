import { connect } from "react-redux";

import GetGif from "../components/GetGif";
import { shareAction } from "../actions";

const mapStateToProps = state => {
  // console.log(state.gifReceiver);
  return {
    urlList: state.gifReceiver,
    tweetShare: state.tweetData,
    gifListReceiver: state.gifListReceiver,
    makeTag: state.makeTag
  };
};

const mapDispatchToProps = dispatch => {
  return {
    shareAction: urlList => {
      dispatch(shareAction(urlList));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GetGif);
