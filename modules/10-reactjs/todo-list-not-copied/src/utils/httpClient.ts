import axios from 'axios'
const httpClient = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/todos'
})
export { httpClient }
