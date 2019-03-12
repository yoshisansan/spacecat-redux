import { connect } from "react-redux";

import Switch from "../components/Switch";
import { switchOn, switchOff, hitGiphy, boolAction } from "../actions";

const mapStateToProps = state => {
  return {
    buttonText: state.buttonText,
    getBool: state.bool
  };
};

const mapDispatchToProps = dispatch => {
  return {
    switchOn: () => {
      dispatch(switchOn());
    },
    switchOff: () => {
      dispatch(switchOff());
    },
    hitGiphy: bool => {
      dispatch(hitGiphy(bool));
    },
    boolAction: flag => {
      dispatch(boolAction(flag));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Switch);
