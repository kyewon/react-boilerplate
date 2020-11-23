import { combineReducers } from 'redux';
import { RootState } from './state';
import { todoReducer } from './todos';
import { MUReducer } from './mu';

export { RootState };

export const rootReducer = combineReducers<RootState>({
  todos: todoReducer,
  mu: MUReducer,
});
