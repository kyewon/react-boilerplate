
export namespace Code {
  export type Color = 'red' | 'orange' | 'yellow'

  export enum ActionType {
    SET_COUNT = 'SET_COUNT',
    SET_TEXT = 'SET_TEXT',
    SET_COLOR = 'SET_COLOR',
    TOGGLE_GOOD = 'TOGGLE_GOOD',
  }

  export type State = {
    count: number;
    text: string;
    color: Color;
    isGood: boolean;
  }
  
  export type Action =
  | { type: ActionType.SET_COUNT, count: number }
  | { type: ActionType.SET_TEXT, text: string }
  | { type: ActionType.SET_COLOR, color: Color }
  | { type: ActionType.TOGGLE_GOOD }

}