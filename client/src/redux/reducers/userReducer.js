import initState from "../initState";

const userReducer = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "SET_USER":
      return payload;

    default:
      return state;
  }
};

export default userReducer;
