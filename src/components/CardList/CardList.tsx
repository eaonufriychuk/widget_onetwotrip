import React, { Component } from 'react';
import { getDate } from '../../modules/flights/helpers/date';
import './CardList.scss';

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

export interface IProps {
  flights: IFight[];
}

interface IState {
  showCard?: boolean;
}


export default class CardList extends Component<IProps, IState> {
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        showCard: true,
      });
    }, 100);
  }

  componentWillReceiveProps() {
    this.setState({
      showCard: false,
    });

    setTimeout(() => {
      this.setState({
        showCard: true,
      });
    }, 100);
  }

  render() {
    const { flights } = this.props;
    const { showCard } = this.state;

    return (
      <div className="cards">
        {flights.map(item => (
          <div className="cards-item" key={item.id} style={{ opacity: showCard ? 1 : 0 }}>
            <div className="cards-item__row _direction">
              <div className="cards-item__label">
                Направление
              </div>
              {item.direction.from}
              -
              {item.direction.to}
            </div>
            <div className="cards-item__row _time">
              <div className="cards-item__label">
                Время вылета - Время прилета
              </div>
              {getDate(item.arrival)}
              <br />
              {getDate(item.departure)}
            </div>
            <div className="cards-item__row _carrier">
              <div className="cards-item__label">
                Название авиакомпании
              </div>
              {item.carrier}
            </div>
          </div>
        ))}
      </div>
    );
  }
}
