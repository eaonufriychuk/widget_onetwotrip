import React, { Component } from 'react';
import { Dispatch } from 'redux';
import uniq from 'uniq';
import { connect } from 'react-redux';
import { getFlights } from '../modules/flights/actions/flights';
import Select from '../components/Select/Select';
import CardList from '../components/CardList/CardList';
import {
  GetFlightsRequest,
  GetFlightsCompleted,
  GetFlightsFailed,
} from '../modules/flights/actions/flights';
import { IFlight, ApplicationState } from '../modules/flights/constants/types';

interface IProps {
  flights: IFlight[];
  getFlightsList?: () => void;
}

interface IState {
  selectFlight: string;
}

class MainContainer extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      selectFlight: 'Все авиакомпании',
    };
  }

  componentDidMount() {
    const { getFlightsList } = this.props;

    getFlightsList();
  }

  getUniqueValues() {
    const { flights } = this.props;
    const uniqValues = uniq(flights.map(({ carrier }) => carrier));

    return ['Все авиакомпании', ...uniqValues];
  }

  getSelectFlights() {
    const { flights } = this.props;
    const { selectFlight } = this.state;
    return selectFlight === 'Все авиакомпании'
      ? flights
      : flights.filter(flight => flight.carrier === selectFlight);
  }

  handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({ selectFlight: e.currentTarget.value });
  }

  render() {
    const { selectFlight } = this.state;

    return (
      <div>
        <Select
          flights={this.getUniqueValues()}
          handleChange={this.handleChange}
          value={selectFlight}
        />
        <CardList flights={this.getSelectFlights()} />
      </div>
    );
  }
}

export default connect(
  (state: ApplicationState) => ({
    flights: state.flightsData,
  }),
  (dispatch: Dispatch<GetFlightsRequest | GetFlightsCompleted | GetFlightsFailed>) => (
    {
      getFlightsList: () => dispatch(getFlights()),
    }
  ),
)(MainContainer);
