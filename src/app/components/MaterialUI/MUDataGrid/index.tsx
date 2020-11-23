import React from 'react';
import { DataGrid, ColDef } from '@material-ui/data-grid';
// import Button from '@material-ui/core/Button';
// import ButtonBase from '@material-ui/core/ButtonBase'


export namespace MUDataGrid {
  export interface Props {
    columns: ColDef[],
    rows: {id: number, name: string, age: number}[]
  }
}

export const MUDataGrid = ({columns, rows }: MUDataGrid.Props): JSX.Element => {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection onRowSelected={(data) =>{
        console.log('data=>', data)
        }} />
      {/* <ButtonBase color='primary' >deleted</ButtonBase> */}
    </div>
  )
}