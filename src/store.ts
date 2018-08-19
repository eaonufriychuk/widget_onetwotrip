import {
  createStore,
  applyMiddleware,
} from 'redux';

import {
  composeWithDevTools,
} from 'redux-devtools-extension';

import thunk from 'redux-thunk';

import updateState from './modules/flights/reducers/flights';

const store = createStore(updateState, composeWithDevTools(applyMiddleware(thunk)));

export default store;
