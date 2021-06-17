import axios from 'axios'
const baseURL = 'https://designr-app.herokuapp.com/users'
export const instance = axios.create({
  baseURL
  // baseURL: process.env.NODE_ENV==="development" ?'http://localhost:5000/users': 'https://learn-design-0.herokuapp.com/users'
})

export const signIn = (values) => instance.post('/signin', values)
export const signUp = (values) => instance.post('/signup', values)


