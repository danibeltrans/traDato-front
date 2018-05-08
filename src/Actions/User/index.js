function setUser(User) {
  return (dispatch) => {
    dispatch({
      type: 'setUser',
      payload: User,
    });
  };
}

export default setUser;
