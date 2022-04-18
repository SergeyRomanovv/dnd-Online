import initState from "../initState";

const gameMapEdReducer = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "EDIT_MAP_EL":
      const newState = [...state];
      newState[payload.x][payload.y] = { bgImg: payload.imgSrc };
      return newState;

    case 'GENERATE_BOARD':
      return payload;

    default:
      return state;
  }
};

export default gameMapEdReducer;
