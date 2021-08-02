import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchACUnitThunk, fetchAllACUnitsThunk, fetchAllHistoryThunk } from "../../store/thunks";

import { StudentView } from "../views";

class StudentContainer extends Component {
    componentDidMount() {
        //getting campus ID from url
        this.props.fetchAllACUnits()
        this.props.fetchAllHistory()
    }

    render() {
        return (
            <StudentView
                allACUnits={this.props.allACUnits}
                allHistory={this.props.allHistory}
            />
        );
    }
}

// map state to props
const mapState = (state) => {
    return {
        allACUnits: state.allACUnits,
        allHistory: state.allHistory
    };
};

// map dispatch to props
const mapDispatch = (dispatch) => {
    return {
        fetchAllACUnits: () => dispatch(fetchAllACUnitsThunk()),
        fetchAllHistory: () => dispatch(fetchAllHistoryThunk())
    };
};

export default connect(mapState, mapDispatch)(StudentContainer);