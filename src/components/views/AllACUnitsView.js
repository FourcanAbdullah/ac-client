import React from 'react';
import { fetchAllHistory } from "../../store/actions/actionCreators";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import Logo from '../../Logo.png'
const columns = [         //material ui recommendation for setting up column titles/values
  { id: 'unit', label: 'Unit', minWidth: 80 },

  {
    id: 'location',
    label: 'Location',
    minWidth: 120,      //changes the size of the column
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },

  {
    id: 'management',
    label: 'Managed By',
    minWidth: 80,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'status',
    label: 'Status',
    minWidth: 100,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'vendor',
    label: 'Vendor',
    minWidth: 60,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'notes',
    label: 'Notes',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'date',
    label: 'Date',
    minWidth: 200,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'delete',
    label: 'Delete',
    minWidth: 100,
    align: 'center',

  },
  {
    id: 'update',
    label: 'Update',
    minWidth: 200,
    align: 'center',

  },


];

const useStyles = makeStyles({
  root: {
    width: '100%',

  },
  container: {
    maxHeight: 550,
  },
  button: {
    marginRight: 40   //for button
  },
});


const AllACUnitsView = (props) => {
  const classes = useStyles();
  const { allACUnits, deleteACUnit, fetchAllACUnits, handleChange, handleSubmit, handleHistory, allStatus, allVendor } = props;

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  if (!allACUnits.length) {     //if there are no ac units the just show buttons and message saying so.
    return (<div>
      <img src={Logo} alt="this is CUNY SPS logo" />
      <Link to={`/newunit`}>

        <Button style={{ color: 'white', backgroundColor: '#003366', float: 'right' }}>Add A/C Unit</Button>
      </Link  >
      <Link to={`/history`}>
        <Button className={classes.button} style={{ color: 'white', backgroundColor: '#003366', float: 'right' }} >Decommissioned A/C Units History</Button>

      </Link>
      <h1 style={{ color: 'white', textAlign: 'center', backgroundColor: '#003366', fontFamily: 'Roboto, Helvetica, Arial, sans-serif' }}>There are no A/C Units.</h1>
    </div>
    );
  };

  return (      //otherwise Show all columns
    <div>
      <img src={Logo} alt="CUNY SPS logo" />
      <Link to={`/newunit`} align='right'>

        <Button style={{ color: 'white', backgroundColor: '#003366', float: 'right', marginLeft: '40' }}>Add A/C Unit</Button>
      </Link  >
      <Link to={`/history`} align='right'>
        <Button className={classes.button} style={{ color: 'white', backgroundColor: '#003366', float: 'right' }} >Decommissioned A/C Units History</Button>

      </Link>

      <Paper className={classes.root}>
        <TableContainer className={classes.container}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {allACUnits.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((acunits) => {


                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={acunits.id}>
                    <TableCell >

                      <p>{acunits.unit}</p>
                      <Link to={`/acunit/${acunits.id}`}>
                        <Button style={{ color: 'white', backgroundColor: '#003366', textDecoration: 'none' }} onClick={async () => { await handleHistory(); await fetchAllHistory(); window.location.reload(false) }}>History</Button>
                      </Link>

                    </TableCell>
                    <TableCell align='right'>
                      {acunits.location}
                    </TableCell>
                    <TableCell align='right'>
                      {acunits.Management.management}
                    </TableCell>
                    {acunits.StatusId === 1 ?
                      <TableCell style={{ color: 'green' }} align='right'>

                        {acunits.Status.status}
                      </TableCell> : <TableCell style={{ color: 'red' }} align='right'>

                        {acunits.Status.status}
                      </TableCell>}


                    <TableCell align='right'>{acunits.Vendor.vendor}</TableCell>
                    <TableCell align='right'>{acunits.notes}</TableCell>
                    <TableCell align='right'>{new Date(acunits.updatedAt).toLocaleString()}</TableCell>
                    <TableCell align='center'>
                      <Button style={{ color: 'white', backgroundColor: 'red' }} onClick={async () => {

                        // eslint-disable-next-line no-restricted-globals
                        if (confirm("Are you sure you want to delete the AC?")) { // true if OK is pressed
                          await handleHistory();
                          await deleteACUnit(acunits.id);
                          fetchAllACUnits()
                        }
                      }}>Delete</Button>
                    </TableCell>
                    <TableCell align='center'>
                      <form style={{ textAlign: 'center' }} onSubmit={(e) => handleSubmit(e, acunits.id)}>
                        <label style={{ color: '#11153e', fontWeight: 'bold' }}>Notes: </label>
                        <textarea placeholder="Max text limit 50" maxLength="50" name="notes" onChange={(e) => handleChange(e)}>


                        </textarea>
                        <br />
                        <br />
                        <label style={{ color: '#11153e', fontWeight: 'bold' }}> Your Name: </label>
                        <input type="text" name="user" onChange={(e) => handleChange(e)} />
                        <br />
                        <br />
                        <label style={{ color: '#11153e', fontWeight: 'bold', marginTop: 10 }}>New Status: </label>
                        <select style={{ width: 200 }} name="StatusId" defaultValue="" onChange={(e) => handleChange(e)}>
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

                        <select name="VendorId" defaultValue="" onChange={(e) => handleChange(e)}>
                          <option disabled value=""> -- select an option -- </option>
                          {allVendor.map((vendor) => {
                            return (
                              <option value={vendor.id} key={vendor.id}>{vendor.vendor}</option>
                            );

                          })}

                        </select>
                        <br />

                        <Button variant="contained" style={{ color: 'white', backgroundColor: '#003366', marginTop: 10 }} type="submit">
                          Update
                        </Button>

                      </form>
                    </TableCell>

                  </TableRow>
                );


              })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={allACUnits.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper >
    </div>
  );


};

AllACUnitsView.propTypes = {
  allACUnits: PropTypes.array.isRequired,
};

export default AllACUnitsView;