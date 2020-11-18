import React from 'react';
import { DataGrid, ColDef } from '@material-ui/data-grid';

export namespace MUDataGrid {
  export interface Props {
    columns: ColDef[],
    rows: {id: number, name: string, age: number}[]
  }
}

export const MUDataGrid = ({columns, rows }: MUDataGrid.Props): JSX.Element => {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
    </div>
  )
}