import initState from "../initState";

const loginReducer = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "USER_TYPING_LOGIN":
      return { ...state, ...payload };

    case "CLEAR_INPUTS_LOGIN":
      return { ...payload };

    default:
      return state;
  }
};

export default loginReducer;
