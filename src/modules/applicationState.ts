interface IFlight {
  id: number;
  direction: {
    from: string,
    to: string,
  };
  arrival: string;
  departure: string;
  carrier: string;
}

export interface ApplicationState {
  flights: {
    flightsData: IFlight[],
    fetching: boolean,
    error: Object,
  }
}