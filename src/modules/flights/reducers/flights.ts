// import {
//   handleActions,
// } from 'redux-actions';

import {
  GetFlightsRequest,
  GetFlightsCompleted,
  GetFlightsFailed,
} from '../actions/flights';

import * as ActionTypes from '../constants/actionTypes';

type Action = GetFlightsRequest | GetFlightsCompleted | GetFlightsFailed;

interface State {
  flightsData: undefined[];
  fetching: boolean,
  error: Object,
}

const initialState: State = {
  flightsData: [],
  fetching: false,
  error: null,
};

const updateState = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case ActionTypes.GET_FLIGHTS_REQUEST:
      return {
        ...state,
        fetching: true,
        error: null,
      };
    case ActionTypes.GET_FLIGHTS_COMPLETED:
      return {
        ...state,
        fetching: false,
        flightsData: [...state.flightsData, ...action.payload],
      };
    case ActionTypes.GET_FLIGHTS_FAILED:
      return {
        ...state,
        fetching: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default updateState;

// export default handleActions({
//   [getFlightsRequest]: state => ({
//     ...state,
//     fetching: true,
//     error: null,
//   }),
//   [getFlightsCompleted]: (state, action) => ({
//     ...state,
//     fetching: false,
//     flightsData: [...state.flightsData, ...action.payload],
//   }),
//   [getFlightsFailed]: (state, action) => ({
//     ...state,
//     fetching: false,
//     error: action.payload,
//   }),
// }, initialState);
