import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchAllACUnitsThunk, deleteACUnitThunk, editACUnitThunk, addHistoryThunk, fetchACUnitThunk } from "../../store/thunks";
import { AllACUnitsView } from "../views";

class allACUnitsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      unit: '',
      location: '',
      status: '',
      vendor: '',
      notes: '',
      increment: true

    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {

    this.props.fetchAllACUnits()


  }

  handleHistory = async () => {

    for (const units of this.props.allACUnits) {

      let object = {}
      let size = await units.histories.length
      if (size < 1) {
        object = {
          unit: units.unit,
          location: units.location,
          status: units.status,
          vendor: units.vendor,
          notes: units.notes,
          ACUnitId: units.id,
        }


        await this.props.addHistory(object)
        await this.props.fetchAllACUnits()
      }
    }
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  handleSubmit = async (event, ID) => {

    event.preventDefault();
    await this.handleHistory()

    await this.props.fetchACUnit(ID)

    let acunits = this.props.acunit

    let id = acunits.id
    let status = this.state.status ? this.state.status : acunits.status;
    let notes = this.state.notes ? this.state.notes : acunits.notes;
    let vendor = this.state.vendor ? this.state.vendor : acunits.vendor;
    let unit = acunits.unit
    let location = acunits.location
    let newEntry = {
      unit: unit,
      location: location,
      status: status,
      vendor: vendor,
      notes: notes,
      ACUnitId: id,
    };
    let updateEntry = {
      id: id,
      unit: unit,
      location: location,
      status: status,
      vendor: vendor,
      notes: notes,

    };


    await this.props.addHistory(newEntry);
    await this.props.editACUnit(updateEntry);

    this.setState({
      unit: '',
      location: '',
      status: '',
      vendor: '',
      notes: ''
    });
    this.props.fetchAllACUnits();
  }

  render() {
    return (
      <AllACUnitsView
        allACUnits={this.props.allACUnits}
        deleteACUnit={this.props.deleteACUnit}
        fetchAllACUnits={this.props.fetchAllACUnits}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}

        handleHistory={this.handleHistory}

        fetchACUnit={this.props.fetchACUnit}
      />
    );
  }
}

// Map state to props;
const mapState = (state) => {
  return {
    allACUnits: state.allACUnits,
    acunit: state.acunit
  };
};

// Map dispatch to props;
const mapDispatch = (dispatch) => {
  return {
    fetchAllACUnits: () => dispatch(fetchAllACUnitsThunk()),
    deleteACUnit: (ACUnitId) => dispatch(deleteACUnitThunk(ACUnitId)),
    editACUnit: (ACUnitId) => dispatch(editACUnitThunk(ACUnitId)),
    addHistory: (history) => dispatch(addHistoryThunk(history)),
    fetchACUnit: (ACUnitId) => dispatch(fetchACUnitThunk(ACUnitId)),
  };
};

// Type check props;
allACUnitsContainer.propTypes = {
  allACUnits: PropTypes.array.isRequired,

};

// Export our store-connected container by default;
export default connect(mapState, mapDispatch)(allACUnitsContainer);