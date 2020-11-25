import { Code } from './code'

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