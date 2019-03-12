import { connect } from "react-redux";

import Twitter from "../components/Twitter/Twitter";
import { tweetOn, tweetOff } from "../actions";

const mapStateToProps = state => {
  return {
    tweetFlag: state.tweetData
  };
};

const mapDispatchToProps = dispatch => {
  return {
    tweetOn: () => {
      dispatch(tweetOn());
    },
    tweetOff: () => {
      dispatch(tweetOff());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Twitter);
