import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchACUnitThunk, fetchAllHistoryThunk, fetchStatusThunk, fetchVendorThunk } from "../../store/thunks";
import PropTypes from "prop-types";
import { ACUnitView } from "../views";



class ACUnitContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      idArray: [],          //this array is used to hold the the history of the respective AC
    };
  }
  componentDidMount() {
    //getting  ID from url
    this.props.fetchACUnit(this.props.match.params.id);
    //fetching all history
    this.props.fetchAllHistory()
    //calling the function on mount
    this.historyFetch()

  }
  /*this function is used for fetching the history logs that are only connected to
  the AC that we need */
  historyFetch = async () => {
    await this.props.fetchAllHistory()    //fetch all the history
    let unitId = parseInt(this.props.match.params.id) //changes the param from string to int
    let History = await this.props.allHistory
    let array = [...this.state.idArray]

    History.map((hist) => {   //maps all history if the param is equal to the ACUnitId of the object
      if (hist.ACUnitId === unitId) {
        array.push({ hist })
        this.setState({
          idArray: array,
        })
      }
    })
  }



  render() {
    return (
      <ACUnitView
        acunit={this.props.acunit}
        idArray={this.state.idArray}
        allHistory={this.props.allHistory}
        unitId={parseInt(this.props.match.params.id)}

      />
    );
  }
}

// map state to props
const mapState = (state) => {
  return {
    acunit: state.acunit,
    status: state.status,
    vendor: state.vendor,
    allHistory: state.allHistory

  };
};

// map dispatch to props
const mapDispatch = (dispatch) => {
  return {
    fetchACUnit: (id) => dispatch(fetchACUnitThunk(id)),
    fetchStatus: (id) => dispatch(fetchStatusThunk(id)),
    fetchVendor: (id) => dispatch(fetchVendorThunk(id)),
    fetchAllHistory: () => dispatch(fetchAllHistoryThunk()),

  };
};
ACUnitContainer.propTypes = {
  allHistory: PropTypes.array.isRequired,
  acunit: PropTypes.array.isRequired,

};

export default connect(mapState, mapDispatch)(ACUnitContainer);