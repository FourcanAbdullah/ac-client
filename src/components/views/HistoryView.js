import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
const columns = [   //material ui recommendation for setting up column titles/values
  { id: 'unit', label: 'Unit', minWidth: 100 },

  {
    id: 'location',
    label: 'Location',
    minWidth: 120,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'user',
    label: 'User',
    minWidth: 100,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'status',
    label: 'Status',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'vendor',
    label: 'Vendor',
    minWidth: 100,
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
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },


];

const useStyles = makeStyles({
  root: {
    width: '100%',

  },
  container: {
    maxHeight: 440,
  },
});

//basically the same setup as ACunit view.
const HistoryView = (props) => {
  const classes = useStyles();
  const { idArray } = props;

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(100);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  return (

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
            {idArray.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((history) => {


              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={history.hist.id}>
                  <TableCell >

                    <p>{history.hist.unit}</p>

                  </TableCell>
                  <TableCell align='right'>
                    {history.hist.location}
                  </TableCell>
                  <TableCell align='right'>
                    {history.hist.user}
                  </TableCell>
                  <TableCell align='right'>
                    {
                      history.hist.Status.status
                    }
                  </TableCell>
                  <TableCell align='right'>{history.hist.Vendor.vendor}</TableCell>
                  <TableCell align='right'>{history.hist.notes}</TableCell>
                  <TableCell align='right'>{new Date(history.hist.createdAt).toLocaleString()}</TableCell>
                </TableRow>

              );


            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100, 150, 200]}
        component="div"
        count={idArray.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper >

  );


};



export default HistoryView;