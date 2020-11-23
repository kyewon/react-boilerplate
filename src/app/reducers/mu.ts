import { handleActions } from 'redux-actions';
import { RootState } from './state';
import { MUActions } from 'app/actions/mu';
import { MUModel } from 'app/models';

const initialState: RootState.MUState = [
  {id: 1, name: 'www', age: 21},
  {id: 2, name: 'eee', age: 44},
  {id: 3, name: 'fff', age: 33}
];

export const MUReducer = handleActions<RootState.MUState, MUModel>(
  {
    [MUActions.Type.ADD_ACTION]: (state, action) => {
      state.push(action.payload)
      console.log('state=>', state)
      return state
    },
    [MUActions.Type.DELETED_ACTION]: (state, action) => {
      return state.filter((mu) => {
        // console.log('state=>', state)
        // console.log('action.payload=>', action.payload)
        if (mu.id === (action.payload as any)) {
          const findIndex = state.indexOf(mu)
          console.log('findIndex=>', findIndex)
          // state.splice(findIndex, 1)
          // state = state.splice(findIndex, 1)
          state.push({id:4, name: 'ggg', age:55})
          console.log('re state=>', state)
          return state
        }
        return state
      })
    },
  },
  initialState
);
