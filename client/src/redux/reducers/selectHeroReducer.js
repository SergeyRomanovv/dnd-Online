import initState from "../initState";

const selectHeroReducer = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "PLAYER_HERO":
      return payload;

    default:
      return state;
  }
};

export default selectHeroReducer;
