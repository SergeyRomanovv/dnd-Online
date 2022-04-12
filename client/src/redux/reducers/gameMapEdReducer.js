import initState from "../initState";

const gameMapEdReducer = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "EDIT_MAP_EL":
        for (let i = 0; i < state.length; i++) {
            for (let j = 0; j < state[i].length; j++) {
                if (i === payload.x && j === payload.y) {
                    console.log(state[i][j])
                    state[i][j] = {bgImg: './Stone_x4_1.jpg'}
                    return state
                }
            }
        } 

    default:
      return state;
  }
};

export default gameMapEdReducer;
