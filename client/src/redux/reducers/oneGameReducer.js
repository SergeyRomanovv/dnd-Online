import initState from "../initState";

const oneGameReducer = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "SET_ONE_GAME":
      return payload;

    case 'SET_ATTR':
      const newState = [...state];
      newState[payload.x][payload.y] = { ...newState[payload.x][payload.y], attr: payload.imgSrc };
      return newState;

    case 'DEL_ATTR':
      const delNewState = [...state];
      delNewState[payload.x][payload.y] = { ...delNewState[payload.x][payload.y], attr: payload.imgSrc };
      return delNewState;

    default:
      return state;
  }
};

export default oneGameReducer;
