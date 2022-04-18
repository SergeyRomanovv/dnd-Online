import initState from "../initState";

const oneGameReducer = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "SET_ONE_GAME":
      return payload;

    case 'SET_ATTR':
      for (let i = 0; i < state.length; i++) {
        for (let j = 0; j < state[i].length; j++) {
          if (i === payload.x && j === payload.y) {
            state[i][j] = { ...state[i][j], attr: payload.imgSrc }
            return [...state];
          }
        }
      }
      break;
    case 'DEL_ATTR':
      for (let i = 0; i < state.length; i++) {
        for (let j = 0; j < state[i].length; j++) {
          if (i === payload.x && j === payload.y) {
            state[i][j] = { ...state[i][j], attr: payload.imgSrc }
            return [...state];
          }
        }
      }
      break;

    default:
      return state;
  }
};

export default oneGameReducer;
