export const getPage = (dispatch, mounted) => {
  if (mounted) {
    dispatch(loading());
    pageFin()
    .then((result) => {
      dispatch(result);
    });
  }
}

const loading = () => {
  return {
    type: 'LOADING'
  };
}

const pageSuccess = (data) => {
  return {
    type: 'SUCCEED_FIN',
    payload: {
      data: data
    }
  };
}

const pageFailure = (data) => {
  return {
    type: 'FAILURE_FIN',
    payload: {
      error: data
    }
  };
}

const pageFin = () => {
  return fetch('http://localhost:8000/', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then((res) => {
    return res.json()
  })
  .then((res) => {
    return pageSuccess(res);
  })
  .catch((err) => {
    return pageFailure(err);
  });
}