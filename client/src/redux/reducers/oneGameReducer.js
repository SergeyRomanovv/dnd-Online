import initState from "../initState";

const oneGameReducer = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "SET_ONE_GAME":
      return payload;

    case  'SET_ATTR':
      for (let i = 0; i < state.length; i++) {
        for (let j = 0; j < state[i].length; j++) {
            if (i === payload.x && j === payload.y) {
                console.log(state[i][j])
                state[i][j] = {...state[i][j], attr: payload.imgSrc}
                return state
            }
        }
    }

    case  'DEL_ATTR':
      for (let i = 0; i < state.length; i++) {
        for (let j = 0; j < state[i].length; j++) {
            if (i === payload.x && j === payload.y) {
                console.log(state[i][j])
                state[i][j] = {...state[i][j], attr: payload.imgSrc}
                return state
            }
        }
    }

    default:
      return state;
  }
};

export default oneGameReducer;
