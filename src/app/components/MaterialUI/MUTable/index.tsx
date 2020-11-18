import React from 'react';
import TableContainer from '@material-ui/core/TableContainer';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  table: {
    minWidth: 800,
  },
});

export namespace MUTable {
  export interface Props {
    columns: {id: number, name: string, completed: boolean}[],
    headers: string[]
  }
}

export const MUTable = ({headers, columns }: MUTable.Props): JSX.Element => {
  const classes = useStyles();
  return (
  <div> 
    <TableContainer component={Paper}>
      <Table className={classes.table}> 
        <TableHead>
          <TableRow> 
            {headers.map(item => {return <TableCell key={item} component="th" scope="row"  >{item}</TableCell>})}
          </TableRow>
        </TableHead>
        <TableBody>
          {columns.map(item => {return <TableRow key={item.id } component="tr"><TableCell component="td" scope="row"> {item.id} </TableCell> <TableCell component="td" scope="row">{item.name}</TableCell> <TableCell component="td" scope="row">{item.completed.toString()}</TableCell></TableRow>})}
        </TableBody>
      </Table>
    </TableContainer>
  </div>
  )
}