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
  const { allACUnits, allHistory } = props;

  return (
    <div>




      <div className={classes.root}>
        <table className={classes.table}>
          <tbody>
            <tr className={classes.tr}>
              <th className={classes.th}>Unit</th>
              <th className={classes.th}>Location</th>
              <th className={classes.th}>Status</th>
              <th className={classes.th}>Vendor</th>
              <th className={classes.th}>Notes</th>
            </tr>

            {allHistory.map(history => {
              console.log("Here Lies History null")
              console.log(history.ACUnitId)
              let ACID = history.ACUnitId
              if (!ACID) {
                return (
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

                  </tr>
                )
              }
            })}
          </tbody>
        </table>
      </div >
    </div>
  );


};


export default ACUnitView;