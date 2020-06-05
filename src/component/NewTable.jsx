import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import ModalEdit from './ModalEdit'
import DeleteIcon from '@material-ui/icons/Delete';


const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(name, calories, fat, carbs, protein, edit, del) {
  return { name, calories, fat, carbs, protein, edit, del};
}

const rows = [
  createData('Isyana Sarasvati', 'Frontend', 'Create main components', '20/6/2020', '08123456789',  <ModalEdit/>, <DeleteIcon/>),
  createData('Eka Gustiwana', 'Frontend', 'Web styling', '20/6/2020', '08123456789',  <ModalEdit/>, <DeleteIcon/>),
  createData('Husein', 'Backend', 'Create Database','20/6/2020' , '08123456789',  <ModalEdit/>, <DeleteIcon/>),
  // createData('Cupcake', 305, 3.7, 67, 4.3,  <ModalEdit/>, <DeleteIcon/>),
  // createData('Gingerbread', 356, 16.0, 49, 3.9,  <ModalEdit/>, <DeleteIcon/>),
  // createData('Gingerbread', 356, 16.0, 49, 3.9,  <ModalEdit/>, <DeleteIcon/>),
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function CustomizedTables() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Employee's Name</StyledTableCell>
            <StyledTableCell align="right">Division</StyledTableCell>
            <StyledTableCell align="right">Assignment</StyledTableCell>
            <StyledTableCell align="right">Deadline</StyledTableCell>
            <StyledTableCell align="right">Phone Number</StyledTableCell>
            <StyledTableCell align="right">Edit</StyledTableCell>
            <StyledTableCell align="right">Delete</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.calories}</StyledTableCell>
              <StyledTableCell align="right">{row.fat}</StyledTableCell>
              <StyledTableCell align="right">{row.carbs}</StyledTableCell>
              <StyledTableCell align="right">{row.protein}</StyledTableCell>
              <StyledTableCell align="right">{row.edit}</StyledTableCell>
              <StyledTableCell align="right">{row.del}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
