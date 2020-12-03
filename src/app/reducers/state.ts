import { TodoModel, MUModel } from 'app/models';
import { employeeState } from '../sagas/api/reducers'

export interface RootState {
  todos: RootState.TodoState;
  mu: RootState.MUState;
  employeeState: RootState.EmployeeState;
  router?: any;
}

export namespace RootState {
  export type TodoState = TodoModel[];
  export type MUState = MUModel[];
  export type EmployeeState = employeeState
}
