import {AUTH, LOGOUT} from './UserType'

const INITIAL_STATE = {
  loggedIn: JSON.parse(localStorage.getItem('profile')) ? true : false,
  loggingIn: JSON.parse(localStorage.getItem('profile')) ? true : false,
  visiting: false,
  authData: JSON.parse(localStorage.getItem('profile'))? JSON.parse(localStorage.getItem('profile')).result: {},
  error: '',
}
const authReducer = (state =INITIAL_STATE, action)=>{
    switch (action.type) {
      case AUTH:
        localStorage.setItem('profile', JSON.stringify({ ...action?.data }))
        return { ...state, loggingIn:true, loggedIn:true, visiting: true, authData: action?.data }
      case LOGOUT:
        localStorage.clear()
        return {
          ...state,
          loggingIn: false,
          loggedIn: false,
          visiting:false,
          authData: {},
        }
      default:
        return state
    }
}

export default authReducer