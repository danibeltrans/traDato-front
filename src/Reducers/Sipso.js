const initState = {};

export default (state = initState, action) => {
  const { type, payload } = action;
  if (type === 'setSipso') {
    return {
      sipso: payload,
    };
  }
  return state;
};
