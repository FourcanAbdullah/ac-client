import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


import { makeStyles } from '@material-ui/core/styles';

//form for adding a new ac

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
  const { handleChange, handleSubmit, allStatus, allVendor, allManagement } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.formContainer}>
        <div className={classes.formTitle}>
          <Typography style={{ fontWeight: 'bold', fontFamily: 'Courier, sans-serif', fontSize: '20px', color: '#11153e' }}>
            New A/C Unit
          </Typography>
        </div>
        <form style={{ textAlign: 'left', marginLeft: '27%' }} onSubmit={(e) => handleSubmit(e)}>
          <label style={{ color: '#11153e', fontWeight: 'bold' }}>Unit: </label>
          <input type="text" name="unit" onChange={(e) => handleChange(e)} />
          <br />
          <br />

          <label style={{ color: '#11153e', fontWeight: 'bold' }}>Location: </label>
          <input type="text" name="location" onChange={(e) => handleChange(e)} />
          <br />
          <br />
          <label style={{ color: '#11153e', fontWeight: 'bold' }}> Your Name: </label>
          <input type="text" name="user" onChange={(e) => handleChange(e)} />
          <br />
          <br />
          <label style={{ color: '#11153e', fontWeight: 'bold' }}>Managed By: </label>
          <select name="ManagementId" id="ManagementId" defaultValue="" onChange={(e) => handleChange(e)}>
            <option disabled value=""> -- select an option -- </option>
            {allManagement.map((management) => {
              return (
                <option value={management.id} key={management.id}>{management.management}</option>
              );

            })}
          </select>
          <br />
          <br />
          <label style={{ color: '#11153e', fontWeight: 'bold' }}>New Status: </label>
          <select name="StatusId" id="StatusId" defaultValue="" onChange={(e) => handleChange(e)}>
            <option disabled value=""> -- select an option -- </option>
            {allStatus.map((status) => {
              return (
                <option value={status.id} key={status.id}>{status.status}</option>
              );

            })}
          </select>
          <br />
          <br />
          <label style={{ color: '#11153e', fontWeight: 'bold' }}>Vendor: </label>
          <select name="VendorId" id="VendorId" defaultValue="" onChange={(e) => handleChange(e)}>
            <option disabled value=""> -- select an option -- </option>
            {allVendor.map((vendor) => {
              return (
                <option value={vendor.id} key={vendor.id}>{vendor.vendor}</option>
              );

            })}
          </select>
          <br />
          <br />

          <label style={{ color: '#11153e', fontWeight: 'bold' }}>Notes: </label>
          <textarea placeholder="Max text limit 50" maxLength="50" name="notes" onChange={(e) => handleChange(e)}>


          </textarea>
          <br />
          <br />





          <Button variant="contained" style={{ color: 'white', backgroundColor: '#003366', marginLeft: '20%', fontWeight: 'bold' }} type="submit">
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