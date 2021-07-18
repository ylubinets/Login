import { applyMiddleware, createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import formReducer from './Reducers/formReducer';
import loginReducer from "./Reducers/loginReducer";

const rootReducer = combineReducers({
  form: formReducer,
  login: loginReducer
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);

export default store;
