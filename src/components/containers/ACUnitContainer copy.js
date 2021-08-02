import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchACUnitThunk } from "../../store/thunks";

import { ACUnitView } from "../views";

class ACUnitContainer extends Component {
  componentDidMount() {
    //getting campus ID from url
    this.props.fetchACUnit(this.props.match.params.id);
  }

  render() {
    return (
      <ACUnitView
        acunit={this.props.acunit}
      />
    );
  }
}

// map state to props
const mapState = (state) => {
  return {
    acunit: state.acunit,
  };
};

// map dispatch to props
const mapDispatch = (dispatch) => {
  return {
    fetchACUnit: (id) => dispatch(fetchACUnitThunk(id)),
  };
};

export default connect(mapState, mapDispatch)(ACUnitContainer);