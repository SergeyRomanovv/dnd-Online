import { combineReducers } from 'redux';
import registerReducer from './registerReducer';
import loginReducer from './loginReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  user: userReducer,
  registerInputs: registerReducer,
  loginInputs: loginReducer,
});

export default rootReducer;
