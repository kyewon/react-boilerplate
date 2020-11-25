import React from 'react';
import { DataGrid, ColDef } from '@material-ui/data-grid';
// import Button from '@material-ui/core/Button';
// import ButtonBase from '@material-ui/core/ButtonBase'
import { MUActions } from 'app/actions/mu';
import { MUModel } from 'app/models/MUModel';
import { Button } from '@material-ui/core';

export namespace MUModelDataGrid {
  export interface Props {
    columns: ColDef[],
    rows: MUModel[],
    // selectedDataId: number,
    addItem: typeof MUActions.addItem,
    // deleteList: typeof MUActions.deleteList,
    // onDeletedRow: (row_id: number) => typeof MUActions.deleteList(row_id: number),
    // actions: MUActions,
  }
}

export const MUModelDataGrid = ({columns, rows, addItem}: MUModelDataGrid.Props): JSX.Element => {
  
  const handleAdd = React.useCallback(
    (mu: MUModel) => {
      if (mu.id) {
        addItem(mu)
      }
    },
    [addItem]
  )

  const handleState2 = React.useCallback((): JSX.Element | void => {
    if (rows.length > 0) {
      return (
        <DataGrid rows={rows} columns={columns} checkboxSelection onRowSelected={(data) =>{
          console.log('data =>', data.data)
          }} />
      ); 
    }
  }, [rows])

  // const activceMU = React.useMemo(() => mu, [mu])

  // const handleState2 = React.useCallback(
  //   (rows: MUModel[]) => {
  //     return (
  //       <DataGrid rows={rows} columns={columns} rowCount={rows.length} checkboxSelection onRowSelected={(data) =>{
  //         console.log('data =>', data.data)
  //         }} />
  //     ); 
  //   },
  //   [rows]
  // )

  // const handleState = React.useCallback((): JSX.Element => {
  //   console.log('handleState rows==>', rows)
  //   return (
  //     <DataGrid rows={rows} columns={columns} rowCount={rows.length} checkboxSelection onRowSelected={(data) =>{
  //       console.log('data =>', data.data)
  //       }} />
  //   );
  // },[rows])

  console.log('MUModelDataGrid=> ', rows)
  return (
    <div style={{ height: 400, width: '100%' }}>
      {handleState2()}
      <Button color='primary' style={{position: 'absolute', right: 1, bottom: 0}} onClick={(e)=> {
        console.log('e=>', e)
        handleAdd(({id:4, name:'hhh', age:66}))}
        }>addItem</Button>
    </div>
    
  )
}