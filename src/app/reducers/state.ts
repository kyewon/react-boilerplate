import { TodoModel, MUModel } from 'app/models';

export interface RootState {
  todos: RootState.TodoState;
  mu: RootState.MUState
  router?: any;
}

export namespace RootState {
  export type TodoState = TodoModel[];
  export type MUState = MUModel[];
}
