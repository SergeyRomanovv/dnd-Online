import { combineReducers } from 'redux';
import registerReducer from './registerReducer';
import loginReducer from './loginReducer';
import userReducer from './userReducer';
import gameMapEdReducer from './gameMapEdReducer';
import builderReducer from './builderReducer';
import boardTitleReducer from './boardTitleReducer';
import oneGameReducer from './oneGameReducer';
import RollDiceReducer from './RollDiceReducer';
import RerenderMapReducer from './RerenderMapReducer';
import selectHeroReducer from './selectHeroReducer';

const rootReducer = combineReducers({
  user: userReducer,
  registerInputs: registerReducer,
  loginInputs: loginReducer,
  gameMap: gameMapEdReducer,
  tempImg: builderReducer,
  boardtitle: boardTitleReducer,
  oneGame: oneGameReducer,
  rollDice: RollDiceReducer,
  rerenderMap: RerenderMapReducer,
  selectHero: selectHeroReducer,
});

export default rootReducer;
