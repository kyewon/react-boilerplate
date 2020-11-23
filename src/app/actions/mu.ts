import { useMemo } from 'react';
import { Dispatch, bindActionCreators } from 'redux';
import { createAction } from 'redux-actions';
import { MUModel } from 'app/models';

export namespace MUActions {
  export enum Type {
    CHANGE_COMPLETED_ACTION = 'CHANGE_COMPLETED_ACTION',
    ADD_ACTION = 'ADD_ACTION',
    DELETED_ACTION = 'DELETED_ACTION',
  }

  export const addItem = createAction<MUModel>(Type.ADD_ACTION);
  // export const deleteList = createAction<PartialPick<MUModel, 'id'>>(Type.DELETED_ACTION);
  // export const deleteList = createAction<MUModel['id']>(Type.DELETED_ACTION);
  // export const changeCompletedStatus = createAction<PartialPick<MUModel, 'completed'>>(Type.CHANGE_COMPLETED_ACTION);
};

export type MUActions = Omit<typeof MUActions, 'Type'>;
export const useMUActions = (dispatch: Dispatch) => {
  const { Type, ...actions } = MUActions;
  return useMemo(() => bindActionCreators(actions as any, dispatch), [dispatch]) as MUActions;
};