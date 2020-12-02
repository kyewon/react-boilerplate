import React, { useReducer } from 'react'
import { actionReducer, reducer} from './reducer'
import { increase, decrease } from './reducer'
import { Code } from './code'
// import { getRepos } from '../../sagas/action'
// import { ActionTypes } from '../../sagas/constant'

export const ReducerSample = (): JSX.Element =>  {
 const [state, dispatch] = useReducer(reducer, {
    count: 0,
    text: '',
    color: 'red',
    isGood: true
  });
 const [customState, customDispatch] = useReducer(actionReducer, {
    count: 0,
    text: '',
    color: 'red',
    isGood: true
  });

  const increaseCount = () => customDispatch(increase(customState.count)) // increase ACTION 함수에서 +1
  const decreaseCount = () => customDispatch(decrease(customState.count - 1))
  // const setCustomCount = () => customDispatch(increase(1))
  const setCount = () => dispatch({ type: Code.ActionType.SET_COUNT, count: state.count + 1})
  const setText = (e: React.ChangeEvent<HTMLInputElement>) => dispatch({ type: Code.ActionType.SET_TEXT, text: e.target.value })
  const setColor = () => dispatch({ type: Code.ActionType.SET_COLOR, color: 'orange' })
  const toggleGood = () => dispatch({ type: Code.ActionType.TOGGLE_GOOD });
  // const sagaTest = () => dispatch(getRepos({}));

  return (
    <div>
      <p>
        <code>count: </code> {state.count }
      </p>
      <br></br>
      <p>
        <code>customState count: </code> {customState.count }
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
        <button onClick={increaseCount}>increaseCount</button>
        <button onClick={decreaseCount}>decreaseCount</button>
      </div>
    </div>
  );
}