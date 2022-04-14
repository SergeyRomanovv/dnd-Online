import initState from "../initState";

const boardTitleReducer = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {

    case "SET_BOARD_TITLE":
      return {...state, ...payload};

    case "DEL_BOARD_TITLE":
      return payload;

    default:
      return state;
  }
};

export default boardTitleReducer;
