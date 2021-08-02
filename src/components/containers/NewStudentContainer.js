import { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import NewStudentView from '../views/NewStudentView';
import { addHistoryThunk, addACUnitThunk, fetchAllACUnitsThunk } from '../../store/thunks';


class NewStudentContainer extends Component {
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

    let acto = await this.props.addACUnit(ac)

    let ac2 = {
      unit: this.state.unit,
      location: this.state.location,
      status: this.state.status,
      vendor: this.state.vendor,
      notes: this.state.notes,
      // ACUnitId: acto.id
    };
    //this.handleAddHistory(acto)
    // await this.props.addHistory(ac)

    this.setState({
      unit: '',
      location: '',
      status: '',
      vendor: '',
      notes: '',
      redirect: true,
      //redirectId: acto.id
    });
    // console.log(acto)


  }


  componentWillUnmount() {
    this.setState({ redirect: false }); ///, redirectId: null

  }
  com
  render() {
    if (this.state.redirect) {
      return (<Redirect to={`/`} />)
    }
    return (
      <NewStudentView
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}
const mapState = (state) => {
  return {
    allACUnits: state.allACUnits,
    //acunit: state.acunit
  };
};

const mapDispatch = (dispatch) => {
  return ({
    addHistory: (history) => dispatch(addHistoryThunk(history)),
    addACUnit: (acunit) => dispatch(addACUnitThunk(acunit)),
    fetchAllACUnits: () => dispatch(fetchAllACUnitsThunk())
  })
}

export default connect(mapState, mapDispatch)(NewStudentContainer);