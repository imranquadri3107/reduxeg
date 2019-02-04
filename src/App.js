import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';

import Post from './components/Post';
import Postform from './components/Postform';
//import { applyMiddleware } from '../../../../AppData/Local/Microsoft/TypeScript/3.2/node_modules/redux';




class App extends Component {
  render() {
    return (
      <Provider store = {store}>
        <div className="App">
        
            <img src={logo} className="App-logo" alt="logo" />

          <Postform/>
          <hr/>
          <Post/>
        </div>
      </Provider>
    );
  }
}

export default App;
