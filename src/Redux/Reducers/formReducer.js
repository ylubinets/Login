import {SET_EMAIL, SET_PASSWORD} from "../types";

const INITIAL_STATE = {
  email: '',
  password: ''
}

const formReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {

    case SET_EMAIL:
      return {
        ...state, email: action.payload
      }

    case SET_PASSWORD:
      return {
        ...state, password: action.payload
      }

    default:
      return state;
  }
}

export default formReducer;