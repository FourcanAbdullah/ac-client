import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchAllACUnitsThunk, fetchAllHistoryThunk } from "../../store/thunks";

import { HistoryView } from "../views";

class HistoryContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            idArray: [],        //this array is used to hold the the history of the respective AC
        };
    }
    componentDidMount() {

        this.props.fetchAllACUnits()
        this.props.fetchAllHistory()
        this.historyFetch()
    }

    /*this function is used for fetching the history logs that are not connected to any ac in other words NULL ac id*/
    historyFetch = async () => {
        await this.props.fetchAllHistory()

        let History = await this.props.allHistory
        let array = [...this.state.idArray]


        History.map((hist) => {

            if (!hist.ACUnitId) {
                array.push({ hist })
                this.setState({
                    idArray: array,
                })
            }
        })

    }

    render() {
        return (
            <HistoryView
                allACUnits={this.props.allACUnits}
                allHistory={this.props.allHistory}
                idArray={this.state.idArray}
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