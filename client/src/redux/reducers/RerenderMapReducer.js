import initState from "../initState";

const RerenderMapReducer = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {

    case 'SET_ATTR_RERENDER':
      const newState = [...state];
      newState[payload.x][payload.y] = { ...newState[payload.x][payload.y], attr: payload.imgSrc };
      return newState;

    default:
      return state;
  }
};

export default RerenderMapReducer;