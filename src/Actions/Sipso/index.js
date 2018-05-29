import constant from 'Constants';

const { API_URL } = constant;

function getSIPSOInfo(curp) {
  const config = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  };
  const url = `${API_URL}mexican-sipso/query/${curp}`;
  return dispatch => (
    fetch(url, config)
      .then(resp => resp.json())
      .then(response => (
        dispatch({
          type: 'setSipso',
          payload: response,
        })
      ))
      .catch((err) => {
        console.log(err);
      })
  );
}

export default getSIPSOInfo;
