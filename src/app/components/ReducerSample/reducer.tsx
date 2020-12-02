import { Code } from './code'
import { createAction, handleActions } from "redux-actions"

const initialState: any = {
  count : 0
}

interface CountAction {
  type: Code.ActionType,
  count: number,
  // payload: {
  //   count: number
  // }
}

export const addCountAction = (count: number): CountAction => {
  return {
    type: Code.ActionType.ADD_COUNT,
    count
    // payload: {
    //   count
    // }
  }
}
export const minusCountAction = (count: number): CountAction => {
  return {
    type: Code.ActionType.MINUS_COUNT,
    count
    // payload: {
    //   count
    // }
  }
}

export const ADDCOUNT = 'COUNT/ADD'
export const MINUSCOUNT = 'COUNT/MINUS'
// payload를 쓰려면 createAction이 필요함. payload의 역할은 공통적인 데이터를 담을 수 있음
export const increase = createAction(ADDCOUNT, (count: number) => count + 1)
export const decrease = createAction(MINUSCOUNT)

type Action = ReturnType<typeof increase> | ReturnType<typeof decrease>

export const actionReducer = handleActions(
  {
    [ADDCOUNT] : (state, { payload: count }: Action) => (
    {
      ...state,
      count : count
    }
    ),
    [MINUSCOUNT] : (state, action: Action) => (
      {
      ...state,
      count : action.payload
    }),
  },
  initialState
);

export const reducer = (state: Code.State, action: Code.Action): Code.State => {
  switch (action.type) {
    case Code.ActionType.SET_COUNT:
      return {
        ...state,
        count: action.count
      };
    case Code.ActionType.SET_TEXT:
      return {
        ...state,
        text: action.text
      };
    case Code.ActionType.SET_COLOR:
      return {
        ...state,
        color: action.color 
      };
    case Code.ActionType.TOGGLE_GOOD:
      return {
        ...state,
        isGood: !state.isGood
      };
    default:
      throw new Error('Unhandled action');
  }
}