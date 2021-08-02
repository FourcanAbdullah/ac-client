import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { deleteACUnit } from "../../store/actions/actionCreators";
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

const ACUnitView = (props) => {
  const classes = useStyles();
  const { acunit } = props;
  // if (!acunit.length) {
  //   return (
  //     <div>
  //       <p>There are no History.</p>
  //       {/* <Link to={`student/new`}>
  //         <button>Add New Student</button>
  //       </Link> */}
  //     </div>
  //   );
  // }
  return (
    <div>
      {/* <h1>{acunit.name}</h1>
      <p>{acunit.description}</p>
      <ul>
        {acunit.histories.map(history => {
          let name = history.unit + " " + history.location;
          return (
            <li key={history.id}>{name}</li>
          );
        })}
      </ul> */}




      <div className={classes.root}>
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


            {acunit.histories.map((history) => (
              // <div>key={history.id}


              <tr className={classes.tr} key={history.id}>
                <td className={classes.th}>

                  <p>{history.unit}</p>

                </td>
                <td className={classes.th}>
                  {history.location}
                </td>
                <td className={classes.th}>
                  {history.status}
                </td>
                <td className={classes.th}>{history.vendor}</td>
                <td className={classes.th}>{history.notes}</td>
                <td className={classes.th}>{history.createdAt}</td>
              </tr>



            ))}
          </tbody>
        </table>
      </div >
    </div>
  );


};


export default ACUnitView;