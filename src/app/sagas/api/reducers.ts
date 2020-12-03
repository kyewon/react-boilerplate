/**
 * 참고 링크:
 * https://vallista.kr/2020/07/20/TypeScript%EC%97%90%EC%84%9C-Redux-Redux-Saga-%EC%95%84%EB%A6%84%EB%8B%B5%EA%B2%8C-%EA%B0%9C%EB%B0%9C%ED%95%98%EA%B8%B0/
 * 
 */
import {
  ActionType,
  createReducer,
  createAsyncAction
} from 'typesafe-actions'
import { IEmployee } from '../api/modules/employee';

export const FETCH_EMPLOYEES = {
  REQUEST: 'EMPLOYEES_FETCH_REQUEST',
  SUCCESS: 'EMPLOYEES_FETCH_SUCCESS',
  FAILURE: 'EMPLOYEES_FETCH_FAILURE'
}

interface IRequest {

}

interface IResponse {
  employees: IEmployee[]
}

interface IError {
  message: string
}

export const fetchEmployees =
  createAsyncAction(FETCH_EMPLOYEES.REQUEST, FETCH_EMPLOYEES.SUCCESS, FETCH_EMPLOYEES.FAILURE)<IRequest, IResponse, IError>()

const actions = {
  fetchEmployees
}

export type Actions = ActionType<typeof actions>
export type employeeState = { employees: IEmployee[], message: string }

const initialState: employeeState = { employees: [], message: '' }

export const employeeReducer = createReducer<employeeState, Actions>(initialState)
  .handleAction(fetchEmployees.success, (state, action) => {
    return { ...state, employees: action.payload.employees }
  })
  .handleAction(fetchEmployees.failure, (state, action) => {
    return { ...state, message: action.payload.message }
  })
  .handleAction(fetchEmployees.request, (state) => {
    return { ...state }
  })
