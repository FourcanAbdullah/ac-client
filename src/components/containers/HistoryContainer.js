import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchAllACUnitsThunk, fetchAllHistoryThunk } from "../../store/thunks";

import { HistoryView } from "../views";

class HistoryContainer extends Component {
    componentDidMount() {

        this.props.fetchAllACUnits()
        this.props.fetchAllHistory()
    }

    render() {
        return (
            <HistoryView
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

export default connect(mapState, mapDispatch)(HistoryContainer);