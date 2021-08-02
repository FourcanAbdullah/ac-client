import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { addHistory, deleteACUnit } from "../../store/actions/actionCreators";
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  table: {
    border: '2px solid blue',
    width: '100%',
  },
  tr: {
    backgroundColor: '#dddddd',
  },
  th: {
    border: '1px solid #dddddd',
    textAlign: 'left',
    padding: '8px',
  },


}));

const AllACUnitsView = (props) => {
  const { allACUnits, deleteACUnit, fetchAllACUnits, handleChange, handleSubmit, acunit, addHistory, handleHistory, handleHist2, fetchACUnit } = props;
  const classes = useStyles();
  let increment = 1
  if (!allACUnits.length) {
    return (<div>There are no ACUnits.
      <Link to={`/newstudent`}>

        <button >Add A/C Unit</button>
      </Link  >
      <Link to={`/student`}>
        <button >Dicommissioned A/C Units History</button>
      </Link>
    </div>
    );
  }
  //handleHistory()

  console.log(increment)
  return (
    <div className={classes.root}>
      {console.log(acunit)}

      <table className={classes.table}>
        <tbody>
          <tr className={classes.tr}>
            <th className={classes.th}>Unit</th>
            <th className={classes.th}>Location</th>
            <th className={classes.th}>Status</th>
            <th className={classes.th}>Vendor</th>
            <th className={classes.th}>Notes</th>
            <th className={classes.th}>Date</th>
          </tr>
          {allACUnits.map((acunits) => (
            // <div>key={acunits.id}


            <tr className={classes.tr} key={acunits.id}>
              {/* {await this.props.fetchAllACUnits()} */}

              <td className={classes.th}>
                <Link to={`/campus/${acunits.id}`}>
                  <p>{acunits.unit}</p>
                  <button onClick={async () => { await handleHistory(); await fetchACUnit(acunits.id) }}>History</button>
                </Link>
              </td>
              <td className={classes.th}>
                {acunits.location}
              </td>
              <td className={classes.th}>
                {acunits.status}
              </td>
              <td className={classes.th}>{acunits.vendor}</td>
              <td className={classes.th}>{acunits.notes}</td>
              <td className={classes.th}>{acunits.updatedAt}</td>
              <td className={classes.th}>
                {/* <Link to={`/campus/${acunits.id}`}>
                  <p>{acunits.unit}</p>
                </Link> */}
                <button style={{ color: 'white', backgroundColor: 'blue' }} onClick={async () => {

                  // eslint-disable-next-line no-restricted-globals
                  if (confirm("Are you sure you want to delete the AC?")) { // true if OK is pressed
                    await deleteACUnit(acunits.id);
                    fetchAllACUnits()
                  }
                }}>Delete</button>
              </td>
              <td className={classes.th}>
                {/* <Link to={`/campus/${acunits.id}`}>
                  <p>{acunits.unit}</p>
                </Link> */}
                <form style={{ textAlign: 'center' }} onSubmit={(e) => handleSubmit(e, acunits.id)}>
                  <label style={{ color: '#11153e', fontWeight: 'bold' }}>Notes: </label>
                  <textarea placeholder="Max text limit 50" maxLength="50" name="notes" onChange={(e) => handleChange(e)}>


                  </textarea>
                  <br />
                  <br />

                  <label style={{ color: '#11153e', fontWeight: 'bold' }}>New Status: </label>
                  <select name="status" id="status" onChange={(e) => handleChange(e)}>
                    <option value="100% operational">100% operational</option>
                    <option value="100% not operational">100% not operational</option>
                    <option value="Fan working only">Fan working Only</option>
                    <option value="Cool air is coming out">Cool air is coming out</option>
                  </select>
                  <br />
                  <br />

                  <label style={{ color: '#11153e', fontWeight: 'bold' }}>Vendor: </label>
                  <input type="text" name="vendor" onChange={(e) => handleChange(e)} />
                  <br />
                  <br />

                  <Button variant="contained" color="primary" type="submit">
                    Update
                  </Button>
                  <br />
                  <br />
                </form>
                {/* {/* <textarea defaultValue="notes" placeholder="Max text limit 50" maxLength="50">

                </textarea> */}
                {/* <select name="status" id="status" onChange={(e) => handleChange(e)}>
                  <option value="100% operational">100% operational</option>
                  <option value="100% not operational">100% not operational</option>
                  <option value="Fan working only">Fan working Only</option>
                  <option value="Cool air is coming out">Cool air is coming out</option>
                </select> */}
                {/* <button onClick={() => {

                }}>Edit</button> */}
              </td>
            </tr>



          ))}
        </tbody>
      </table>
      <Link to={`/newstudent`}>

        <button >Add A/C Unit</button>
      </Link  >
      <Link to={`/student`}>
        <button >Dicommissioned A/C Units History</button>
      </Link>

    </div >
  );
};

AllACUnitsView.propTypes = {
  allACUnits: PropTypes.array.isRequired,
};

export default AllACUnitsView;