import {connect} from 'react-redux';
import Main from '../components/Main';
import {getPage} from '../actions/Page';

const mapStateToProps = (state) => {
  return {
    loading: state.loading,
    data: state.urls.data,
    error: state.urls.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getPage: (mounted) => {
      getPage(dispatch, mounted);
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
