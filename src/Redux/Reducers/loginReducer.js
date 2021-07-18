import { HIDE_ALERT, LOGIN, LOGIN_FAILED, LOGOUT } from "../types";

const INITIAL_STATE = {
  error: null,
  isLogin: !!localStorage.getItem('token'),
};

const loginReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isLogin: true,
      };

    case LOGOUT:
      return {
        ...state,
        isLogin: false,
      };

    case LOGIN_FAILED:
      return {
        ...state,
        error: action.payload,
      };

      case HIDE_ALERT:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};

export default loginReducer;
