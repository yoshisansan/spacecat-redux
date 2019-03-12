import { connect } from "react-redux";

import GetGif from "../components/GetGif";

const mapStateToProps = state => {
  // console.log(state.gifReceiver);
  return {
    urlList: state.gifReceiver
  };
};

export default connect(
  mapStateToProps,
  null
)(GetGif);
