import initState from "../initState";

const registerReducer = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ROLL_DICE":
      return { ...payload };

    default:
      return state;
  }
};

export default registerReducer;
