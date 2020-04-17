import { combineReducers } from 'redux';
import urlLoading from './UrlLoading';
import urls from './Urls';

export default combineReducers({
  urlLoading,
  urls
});
