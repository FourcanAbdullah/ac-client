
import { makeStyles } from '@material-ui/core/styles';

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
              <th className={classes.th}>Date</th>
            </tr>


            {acunit.histories.map((history) => (



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