import React, { useReducer } from 'react'
import { reducer } from './reducer'
import { Code } from './code'

export const ReducerSample = (): JSX.Element =>  {
 const [state, dispatch] = useReducer(reducer, {
    count: 0,
    text: '',
    color: 'red',
    isGood: true
  });

  const setCount = () => dispatch({ type: Code.ActionType.SET_COUNT, count: state.count + 1})
  const setText = (e: React.ChangeEvent<HTMLInputElement>) => dispatch({ type: Code.ActionType.SET_TEXT, text: e.target.value })
  const setColor = () => dispatch({ type: Code.ActionType.SET_COLOR, color: 'orange' })
  const toggleGood = () => dispatch({ type: Code.ActionType.TOGGLE_GOOD });

  return (
    <div>
      <p>
        <code>count: </code> {state.count }
      </p>
      <br></br>
      <p>
        <input value={state.text} onChange={setText}></input>
        <code>text: </code> {state.text}
      </p>
      <br></br>
      <p>
        <code>color: </code> {state.color}
      </p>
      <br></br>
      <p>
        <code>isGood: </code> {state.isGood ? 'true' : 'false'}
      </p>
      <br></br>
      <div>
        <button onClick={setCount}>SET_COUNT</button>
        {/* <button onClick={setText}>SET_TEXT</button> */}
        <button onClick={setColor}>SET_COLOR</button>
        <button onClick={toggleGood}>TOGGLE_GOOD</button>
      </div>
    </div>
  );
}