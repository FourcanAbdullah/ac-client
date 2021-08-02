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
    console.log("testing")
    //this.handleHistory()


  }
  handleHist2 = async (id) => {
    await this.props.fetchACUnit(id)

    let acunits = this.props.acunit
    console.log(acunits)
    let object = {}
    let size = await acunits.histories.length
    if (acunits.histories.length < 1) {
      object = {
        unit: acunits.unit,
        location: acunits.location,
        status: acunits.status,
        vendor: acunits.vendor,
        notes: acunits.notes,
        ACUnitId: acunits.id,
      }
      console.log(object)
      await this.props.addHistory(object)
    }
    console.log(object)
    this.props.fetchACUnit(id)

  }
  handleHistory = async () => {
    // this.props.allACUnits.map((acunits) => {
    //   console.log(acunits.id)
    //   let object = {}
    //   let size = await acunits.histories.length
    //   if (acunits.histories.length < 1) {
    //     object = {
    //       unit: acunits.unit,
    //       location: acunits.location,
    //       status: acunits.status,
    //       vendor: acunits.vendor,
    //       notes: acunits.notes,
    //       ACUnitId: acunits.id,
    //     }
    //     console.log(object)
    //     await this.props.addHistory(object)
    //   }
    //   console.log(object)
    // })

    for (const units of this.props.allACUnits) {
      console.log(units.id)
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
        console.log(object)

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
    //alert(console.log(this.props.allACUnits[ID - 1].id))
    event.preventDefault();
    await this.handleHistory()
    //let acunits2 = await this.props.fetchACUnit(ID)
    await this.props.fetchACUnit(ID)
    //console.log(ID)
    let acunits = this.props.acunit   //this.props.allACUnits[ID - 1];
    //console.log(this.props.acunit.status)
    // let id = this.props.acunits.id
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
        acunit={this.props.acunit}
        addHistory={this.props.addHistory}
        handleHistory={this.handleHistory}
        handleHist2={this.handleHist2}
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
  //fetchallACUnits: PropTypes.func.isRequired,
};

// Export our store-connected container by default;
export default connect(mapState, mapDispatch)(allACUnitsContainer);