import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
// import '../css/style.css';

export namespace Board {
  export interface Props {
    tableData: {id: number, name: string, completed: boolean}[],
    columns: {
      dataField: string,
      text: string
    }[]
  }
}

export const Board = ({ tableData, columns }: Board.Props): JSX.Element => {
  return (
    <div>
      <BootstrapTable keyField='id' data = {tableData} columns = {columns}
      striped
      hover
      />
    </div>
  )
}