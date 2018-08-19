import { Dispatch } from 'redux';
import * as ActionTypes from '../constants/actionTypes';
import { IFlight } from '../constants/types';

export type GetFlightsRequest = {
  type: ActionTypes.GET_FLIGHTS_REQUEST,
}

export type GetFlightsCompleted = {
  type: ActionTypes.GET_FLIGHTS_COMPLETED,
  payload: IFlight[],
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

export function getFlightsCompleted(payload: IFlight[]): GetFlightsCompleted {
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

export const getFlights = () => (dispatch: Dispatch<GetFlightsRequest
  | GetFlightsCompleted
  | GetFlightsFailed>) => {
  dispatch(getFlightsRequest());
  fetch('http://localhost:3000/flights')
    .then(res => res.json())
    .then((flights) => {
      dispatch(getFlightsCompleted(flights));
    })
    .catch((error) => {
      dispatch(getFlightsFailed(error));
    });
};
