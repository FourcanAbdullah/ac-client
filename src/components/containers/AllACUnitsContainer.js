import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchAllACUnitsThunk, deleteACUnitThunk, editACUnitThunk, addHistoryThunk, fetchACUnitThunk, fetchAllStatusThunk, fetchAllVendorThunk, fetchAllManagementThunk } from "../../store/thunks";
import { AllACUnitsView } from "../views";



class allACUnitsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      unit: '',
      location: '',
      notes: '',
      user: '',
      increment: true,
      ManagementId: 0,
      VendorId: 0,
      StatusId: 0,
    };
    this.handleChange = this.handleChange.bind(this); //for changes in the input
    this.handleSubmit = this.handleSubmit.bind(this); //handles submit for the form
  }
  componentDidMount() {


    this.props.fetchAllACUnits()
    this.props.fetchAllStatus()
    this.props.fetchAllVendor()
    this.props.fetchAllManagement()
    this.handleHistory()

  }
  /*handleHistory is a function to update the history for a new AC or a AC without a history log yet. It activates when you 
  press the delete, history, update buttons */

  handleHistory = async () => {
    console.log("UPDATING HISTORY")
    for (const units of this.props.allACUnits) { //loops through all the ac units if the 

      let object = {}
      let size = await units.histories.length
      if (size < 1) {             //if there is no history for this unit then create the object
        object = {
          unit: units.unit,
          location: units.location,
          user: units.user,
          notes: units.notes,
          ACUnitId: units.id,
          StatusId: units.StatusId,
          VendorId: units.VendorId,
          ManagementId: units.ManagementId,
          createdAt: units.updatedAt,
        }


        await this.props.addHistory(object)     //add to history
        await this.props.fetchAllACUnits()      //fetch back all history
      }
    }
  }

  /*handleChange used to setstate based on input */
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  /*handle submit updates the current ac unit and adds to history */
  handleSubmit = async (event, ID) => {

    event.preventDefault();   //dont refresh page

    await this.handleHistory()            //fetch all history
    if (this.state.user.length === 0) {             //alerts user to input the required inputs
      alert("Please Input/Re-input your Name to Update!")
    }
    else if (this.state.StatusId === 0) {
      alert("Please Input Status to Update!")
    }
    else {


      await this.props.fetchACUnit(ID)    //fetch the acunit

      let acunits = this.props.acunit

      let id = acunits.id
      let StatusId = this.state.StatusId ? this.state.StatusId : acunits.StatusId;
      let user = this.state.user ? this.state.user : acunits.user;
      let notes = this.state.notes ? this.state.notes : acunits.notes;
      let VendorId = this.state.VendorId ? this.state.VendorId : acunits.VendorId;
      let unit = acunits.unit
      let location = acunits.location
      let ManagementId = acunits.ManagementId

      let newEntry = {
        unit: unit,
        location: location,
        user: user,
        notes: notes,
        ACUnitId: id,
        StatusId: StatusId,
        VendorId: VendorId,
        ManagementId: ManagementId

      };
      let updateEntry = {
        id: id,
        unit: unit,
        user: user,
        location: location,
        StatusId: StatusId,
        VendorId: VendorId,
        ManagementId: ManagementId,
        notes: notes,

      };


      await this.props.addHistory(newEntry);
      await this.props.editACUnit(updateEntry);

      this.setState({
        unit: '',
        user: '',
        location: '',
        StatusId: 0,
        VendorId: 0,
        ManagementId: 0,
        notes: ''
      });
      this.props.fetchAllACUnits();
    }

  }

  render() {
    return (
      <AllACUnitsView
        allACUnits={this.props.allACUnits}
        deleteACUnit={this.props.deleteACUnit}
        fetchAllACUnits={this.props.fetchAllACUnits}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        allStatus={this.props.allStatus}
        allVendor={this.props.allVendor}
        allManagement={this.props.allManagement}
        handleHistory={this.handleHistory}


      />
    );
  }
}

// Map state to props;
const mapState = (state) => {
  return {
    allACUnits: state.allACUnits,
    allStatus: state.allStatus,
    allVendor: state.allVendor,
    allManagement: state.allManagement,
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
    fetchAllStatus: () => dispatch(fetchAllStatusThunk()),
    fetchAllVendor: () => dispatch(fetchAllVendorThunk()),
    fetchAllManagement: () => dispatch(fetchAllManagementThunk()),
  };
};

// Type check props;
allACUnitsContainer.propTypes = {
  allACUnits: PropTypes.array.isRequired,
  allStatus: PropTypes.array.isRequired,
  allVendor: PropTypes.array.isRequired,
  allManagement: PropTypes.array.isRequired,
};

// Export our store-connected container by default;
export default connect(mapState, mapDispatch)(allACUnitsContainer);