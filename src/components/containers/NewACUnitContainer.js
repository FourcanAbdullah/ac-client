import { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import NewACUnitView from '../views/NewACUnitView';
import { addHistoryThunk, addACUnitThunk, fetchAllACUnitsThunk } from '../../store/thunks';


class NewACUnitContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      unit: '',
      location: '',
      status: '',
      vendor: '',
      notes: '',
      redirect: false,
      redirectId: null
    };
  }
  componentDidMount() {
    //this.props.fetchAllACUnits()
  }
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = async event => {
    event.preventDefault();

    let ac = {
      unit: this.state.unit,
      location: this.state.location,
      status: this.state.status,
      vendor: this.state.vendor,
      notes: this.state.notes,
    };

    await this.props.addACUnit(ac)



    this.setState({
      unit: '',
      location: '',
      status: '',
      vendor: '',
      notes: '',
      redirect: true,

    });



  }


  componentWillUnmount() {
    this.setState({ redirect: false });

  }
  com
  render() {
    if (this.state.redirect) {
      return (<Redirect to={`/`} />)
    }
    return (
      <NewACUnitView
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}
const mapState = (state) => {
  return {
    allACUnits: state.allACUnits,

  };
};

const mapDispatch = (dispatch) => {
  return ({
    addHistory: (history) => dispatch(addHistoryThunk(history)),
    addACUnit: (acunit) => dispatch(addACUnitThunk(acunit)),
    fetchAllACUnits: () => dispatch(fetchAllACUnitsThunk())
  })
}

export default connect(mapState, mapDispatch)(NewACUnitContainer);