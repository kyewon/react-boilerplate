import { takeLatest, call, put } from 'redux-saga/effects'

import { fetchEmployees } from '../api/modules/employee'
import { FETCH_EMPLOYEES } from './reducers'

function* fetch() {
  try {
    const employees = yield call(fetchEmployees)
    yield put({ type: FETCH_EMPLOYEES.SUCCESS, payload: { employees: employees.data } })
  } catch (e) {
    yield put({ type: FETCH_EMPLOYEES.FAILURE, payload: { message: e.message } })
  }
}

export default function* sagas() {
  yield takeLatest(FETCH_EMPLOYEES.REQUEST, fetch)
}