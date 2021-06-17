import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT } from './UserType'

const INITIAL_STATE = {
  loggedIn: false,
  loggingIn: false,
  user: {},
  error: ''
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
   case LOGIN_REQUEST: 
   return {...state, loggingIn: true, error: ''}
      case LOGIN_SUCCESS:

          return { ...state, loggingIn:false, loggedIn: true, ...action?.payload };
          case LOGIN_FAILURE:
            return {...state, loggingIn: false, error: action?.payload.message}
          
          case LOGOUT:
            // localStorage.clear()
             return { ...state, ...INITIAL_STATE }

   
             default:
      return { ...state }
  }
}
