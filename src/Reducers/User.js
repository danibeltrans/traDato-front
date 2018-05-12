const initState = {
  DisplayName: 'Emil Hernandez',
};

export default (state = initState, action) => {
  const { type, payload } = action;

  if (type === 'setUser') {
    return {
      user: payload,
    };
  }
  return state;
};
