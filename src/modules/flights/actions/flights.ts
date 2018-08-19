// import {
//   createAction,
// } from 'redux-actions';

import { Dispatch } from 'redux';
import * as ActionTypes from '../constants/actionTypes';
import { DispatchProp } from '../../../../node_modules/@types/react-redux/index';

// import {
//   GET_FLIGHTS_REQUEST,
//   GET_FLIGHTS_COMPLETED,
//   GET_FLIGHTS_FAILED,
// } from '../constants/actionTypes';
interface IFight {
  id: number;
  direction: {
    from: string,
    to: string,
  };
  arrival: string;
  departure: string;
  carrier: string;
}

export type GetFlightsRequest = {
  type: ActionTypes.GET_FLIGHTS_REQUEST,
}

export type GetFlightsCompleted = {
  type: ActionTypes.GET_FLIGHTS_COMPLETED,
  payload: IFight[],
}

export type GetFlightsFailed = {
  type: ActionTypes.GET_FLIGHTS_FAILED,
  payload: Object,
}

export function getFlightsRequest(): GetFlightsRequest {
  return {
    type: ActionTypes.GET_FLIGHTS_REQUEST,
  }
}

export function getFlightsCompleted(payload: IFight[]): GetFlightsCompleted {
  return {
    type: ActionTypes.GET_FLIGHTS_COMPLETED,
    payload,
  }
}

export function getFlightsFailed(payload: Error): GetFlightsFailed {
  return {
    type: ActionTypes.GET_FLIGHTS_FAILED,
    payload,
  }
}

export const getFlights = () => (dispatch: Dispatch<any>) => {
  dispatch(getFlightsRequest());
  return (fetch('http://localhost:3000/flights')
    .then(res => res.json())
    .then((flights) => {
      dispatch(getFlightsCompleted(flights));
    })
    .catch((error) => {
      dispatch(getFlightsFailed(error));
    }));
};