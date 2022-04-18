import initState from "../initState";

const RerenderMapReducer = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {

    case 'SET_ATTR_RERENDER':
      const newState = [...state];
      newState[payload.x][payload.y] = { ...newState[payload.x][payload.y], attr: payload.imgSrc };
      return newState;

      case 'DEL_ATTR_RERENDER':
        const delNewState = [...state];
        delNewState[payload.x][payload.y] = { ...delNewState[payload.x][payload.y], attr: payload.imgSrc };
        return delNewState;

    default:
      return state;
  }
};

export default RerenderMapReducer;
