// import fetch from 'node-fetch'
import axios from 'axios'

export interface IEmployee {
  id: string
  employee_name: string
  employee_salary: string
  employee_age: string
  profile_image: string
}

export const fetchEmployees = (): Promise<IEmployee> => {
  return axios.get('http://dummy.restapiexample.com/api/v1/employees')
    .then(res => {
      console.log('res=>', res.data.data)
      if (res.status !== 200) {
        throw new Error(res.statusText)
      }
      return res.data.data as Promise<IEmployee>
    })
}