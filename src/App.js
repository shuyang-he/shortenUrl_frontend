import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router';
import Main from './containers/MainContainer';

function App() {
  return (
    <Switch>
      <Route path='/'>
        <Main />
      </Route>
    </Switch>
  );
}

export default App;
