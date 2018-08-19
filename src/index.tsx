import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import MainContainer from './containers/MainContainer';
import store from './store';
import './style.scss';

function App() {
  return (
    <Provider store={store}>
      <MainContainer />
    </Provider>
  );
}

ReactDom.render(<App />, document.getElementById('app'));
