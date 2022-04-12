import { combineReducers } from 'redux';
import registerReducer from './registerReducer';
import loginReducer from './loginReducer';
import userReducer from './userReducer';
import gameMapEdReducer from './gameMapEdReducer';
import builderReducer from './builderReducer';

const rootReducer = combineReducers({
  user: userReducer,
  registerInputs: registerReducer,
  loginInputs: loginReducer,
  gameMap: gameMapEdReducer,
  tempImg: builderReducer,
});

export default rootReducer;
