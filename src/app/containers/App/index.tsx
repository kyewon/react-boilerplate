import React from 'react';
import style from './style.css';
import { RouteComponentProps } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { useTodoActions } from 'app/actions';
import { RootState } from 'app/reducers';
import { TodoModel } from 'app/models';
import { Header, TodoList, Footer, Temper, Board, MUTable, MUDataGrid } from 'app/components';

const FILTER_VALUES = (Object.keys(TodoModel.Filter) as (keyof typeof TodoModel.Filter)[]).map(
  (key) => TodoModel.Filter[key]
);

const FILTER_FUNCTIONS: Record<TodoModel.Filter, (todo: TodoModel) => boolean> = {
  [TodoModel.Filter.SHOW_ALL]: () => true,
  [TodoModel.Filter.SHOW_ACTIVE]: (todo) => !todo.completed,
  [TodoModel.Filter.SHOW_COMPLETED]: (todo) => todo.completed
};

export namespace App {
  export interface Props extends RouteComponentProps<void> {}
}

export const App = ({ history, location }: App.Props) => {
  const dispatch = useDispatch();
  const todoActions = useTodoActions(dispatch);
  const { todos, filter } = useSelector((state: RootState) => {
    const hash = location?.hash?.replace('#', '');
    return {
      todos: state.todos,
      filter: FILTER_VALUES.find((value) => value === hash) ?? TodoModel.Filter.SHOW_ALL
    };
  });

  const handleClearCompleted = React.useCallback((): void => {
    todoActions.clearCompleted();
  }, [todoActions]);

  const handleFilterChange = React.useCallback(
    (filter: TodoModel.Filter): void => {
      history.push(`#${filter}`);
    },
    [history]
  );

  const filteredTodos = React.useMemo(() => (filter ? todos.filter(FILTER_FUNCTIONS[filter]) : todos), [todos, filter]);
  const activeCount = React.useMemo(() => todos.filter((todo) => !todo.completed).length, [todos]);
  const completedCount = React.useMemo(() => todos.filter((todo) => todo.completed).length, [todos]);

  const tableData = [
    {id: 1, name: 'rx', completed: false},
    {id: 2, name: 'xx', completed: false},
    {id: 3, name: 'ww', completed: false}
  ]
  const columns = [{
    dataField: 'id',
    text: 'ID'
  }, {
    dataField: 'name',
    text: 'Name'
  }, {
    dataField: 'completed',
    text: 'completed'
  }]

  const muHeaders = ['id', 'name', 'completed']
  const muColumns = [
    {id: 1, name: 'rx', completed: false},
    {id: 2, name: 'xx', completed: false},
    {id: 3, name: 'ww', completed: false}
  ]

  const muGridrows = [
    {id: 1, name: 'hhhhh', age: 22},
    {id: 2, name: 'fffffff', age: 23},
    {id: 3, name: 'eeeeee', age: 24},
  ]
  const muGridcolumns = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'name', headerName: 'Name', width: 100 },
    { field: 'age', headerName: 'Age', width: 200 }
  ]

  return (
    <div className={style.normal}>
      <Header addTodo={todoActions.addTodo} />
      <TodoList todos={filteredTodos} actions={todoActions} />
      <Footer
        filter={filter}
        activeCount={activeCount}
        completedCount={completedCount}
        onClickClearCompleted={handleClearCompleted}
        onClickFilter={handleFilterChange}
      />
      <Temper color="red" name="계원1" />
      <Temper color="blue" name="계원2" />
      <div>------------------------ </div>
      <Board tableData={tableData} columns= {columns} />

      <div>------------------------ </div>
      <MUTable headers={muHeaders} columns= {muColumns} />

      <div>------------------------ </div>
      <MUDataGrid columns= {muGridcolumns} rows= {muGridrows} />
    </div>
  );
};
