const urlLoading = (state = false, action) => {
  switch (action.type) {
    case 'LOADING':
      return true;
    case 'SUCCEED_FIN':
      return false;
    case 'FAILURE_FIN':
      return false;
    default:
      return state;
  }
}

export default urlLoading;
