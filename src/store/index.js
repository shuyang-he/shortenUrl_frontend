import reducer from '../reducers/index';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

const midware = [thunk];
const store = createStore(
  reducer, 
  compose(
    applyMiddleware(...midware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
