import { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import NewACUnitView from '../views/NewACUnitView';
import { addHistoryThunk, addACUnitThunk, fetchAllACUnitsThunk, fetchAllStatusThunk, fetchAllVendorThunk, fetchAllManagementThunk } from '../../store/thunks';


class NewACUnitContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      unit: '',
      location: '',
      user: '',
      StatusId: 0,
      VendorId: 0,
      ManagementId: 0,
      notes: '',
      redirect: false,
    };
  }
  componentDidMount() {

    this.props.fetchAllStatus()
    this.props.fetchAllVendor()
    this.props.fetchAllManagement()
  }
  /*handleChange used to setstate based on input */
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  /*handle submit adds new ac unit */
  handleSubmit = async event => {
    event.preventDefault(); //prevents refresh
    if (this.state.unit.length === 0) {     //all alerts to make sure user inputs values into required fields
      alert("Please Input Unit")
    }
    else if (this.state.location.length === 0) {
      alert("Please Input Location")
    }
    else if (this.state.user.length === 0) {
      alert("Please Input Your Name")
    }
    else if (this.state.ManagementId === 0) {
      alert("Please Input Current A/C Manager")
    }
    else if (this.state.StatusId === 0) {
      alert("Please Input Current Status")
    }
    else if (this.state.VendorId === 0) {
      alert("Please input Current AC Vendor")
    }
    else {        //once all the required values are inputed the add the ac unit and set state back to blank
      let ac = {
        unit: this.state.unit,
        location: this.state.location,
        user: this.state.user,
        ManagementId: this.state.ManagementId,
        StatusId: this.state.StatusId,
        VendorId: this.state.VendorId,
        notes: this.state.notes,
      };

      await this.props.addACUnit(ac)



      this.setState({
        unit: '',
        location: '',
        user: '',
        ManagementId: 0,
        StatusId: 0,
        VendorId: 0,
        notes: '',
        redirect: true,

      });
    }




  }


  /*unmount is used to set redirect back to false */
  componentWillUnmount() {
    this.setState({ redirect: false });

  }

  render() {
    if (this.state.redirect) {        //if redirect is true then do back to the main page
      return (<Redirect to={`/`} />)
    }
    return (
      <NewACUnitView
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        allStatus={this.props.allStatus}
        allVendor={this.props.allVendor}
        allManagement={this.props.allManagement}
      />
    );
  }
}
const mapState = (state) => {
  return {
    allACUnits: state.allACUnits,
    allStatus: state.allStatus,
    allVendor: state.allVendor,
    allManagement: state.allManagement,
  };
};

const mapDispatch = (dispatch) => {
  return ({
    addHistory: (history) => dispatch(addHistoryThunk(history)),
    addACUnit: (acunit) => dispatch(addACUnitThunk(acunit)),
    fetchAllACUnits: () => dispatch(fetchAllACUnitsThunk()),
    fetchAllStatus: () => dispatch(fetchAllStatusThunk()),
    fetchAllVendor: () => dispatch(fetchAllVendorThunk()),
    fetchAllManagement: () => dispatch(fetchAllManagementThunk()),
  })
}

export default connect(mapState, mapDispatch)(NewACUnitContainer);