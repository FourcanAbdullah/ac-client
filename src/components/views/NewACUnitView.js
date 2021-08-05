import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(() => ({
  formContainer: {
    width: '500px',
    backgroundColor: '#f0f0f5',
    borderRadius: '5px',
    margin: 'auto',
  },
  title: {
    flexGrow: 1,
    textAlign: 'left',
    textDecoration: 'none'
  },
  customizeAppBar: {
    backgroundColor: '#11153e',
    shadows: ['none'],
  },
  formTitle: {
    backgroundColor: '#c5c8d6',
    marginBottom: '15px',
    textAlign: 'center',
    borderRadius: '5px 5px 0px 0px',
    padding: '3px'
  },

}));

const NewACUnitView = (props) => {
  const { handleChange, handleSubmit } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.formContainer}>
        <div className={classes.formTitle}>
          <Typography style={{ fontWeight: 'bold', fontFamily: 'Courier, sans-serif', fontSize: '20px', color: '#11153e' }}>
            New A/C Unit
          </Typography>
        </div>
        <form style={{ textAlign: 'center' }} onSubmit={(e) => handleSubmit(e)}>
          <label style={{ color: '#11153e', fontWeight: 'bold' }}>Unit: </label>
          <input type="text" name="unit" onChange={(e) => handleChange(e)} />
          <br />
          <br />

          <label style={{ color: '#11153e', fontWeight: 'bold' }}>Location: </label>
          <input type="text" name="location" onChange={(e) => handleChange(e)} />
          <br />
          <br />
          <label style={{ color: '#11153e', fontWeight: 'bold' }}>New Status: </label>
          <select name="status" id="status" onChange={(e) => handleChange(e)}>
            <option hidden disabled selected value> -- select an option -- </option>
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

          <label style={{ color: '#11153e', fontWeight: 'bold' }}>Notes: </label>
          <textarea placeholder="Max text limit 50" maxLength="50" name="notes" onChange={(e) => handleChange(e)}>


          </textarea>
          <br />
          <br />





          <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>
          <br />
          <br />
        </form>
      </div>
    </div>

  )
}

export default NewACUnitView;