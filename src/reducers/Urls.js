const initialState = {
  data: [],
  error: '',
};

let info = null;

const urls = (state = initialState, action) => {
  switch (action.type) {
    case 'SUCCEED_FIN':
      info = JSON.parse(JSON.stringify(state));
      info.data = JSON.parse(JSON.stringify(action.payload.data));
      return info;
    case 'FAILURE_FIN':
      info = JSON.parse(JSON.stringify(state));
      info.error = JSON.parse(JSON.stringify(action.payload.error));
      return info
    default:
      return state;
  }
}

export default urls;
