import initState from "../initState";

const builderReducer = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "GET_SRC":
      return payload;

    default:
      return state;
  }
};

export default builderReducer;
