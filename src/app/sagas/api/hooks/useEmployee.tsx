import { useSelector, useDispatch } from 'react-redux'
import * as actions from '../reducers'
// import { RootState } from '../store'
import { employeeReducer } from '../reducers'

export type RootState = ReturnType<typeof employeeReducer>

function useEmployee() {
  const dispatch = useDispatch()
  const employeeState = useSelector((store: RootState) => store.employees)

  const fetchEmployees = () => {
    dispatch(actions.fetchEmployees.request(''))
  }

  return {
    employeeState,
    fetchEmployees
  }
}

export default useEmployee