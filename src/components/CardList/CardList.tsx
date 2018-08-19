import React, { Component } from 'react';
import { IFlight } from '../../modules/flights/constants/types';
import { getDate } from '../../modules/flights/helpers/date';
import './CardList.scss';

interface IProps {
  flights: IFlight[];
}

export default class CardList extends Component<IProps> {
  render() {
    const { flights } = this.props;

    return (
      <div className="card_list container">
        {flights.map(item => (
          <div className="card_item" key={item.id}>
            <div className="card_item__row">
              <div className="card_item__label">
                Откуда - Куда
              </div>
              {item.direction.from}
              -
              {item.direction.to}
            </div>
            <div className="card_item__row">
              <div className="card_item__label">
                Время вылета
              </div>
              {getDate(item.arrival)}
              <div className="card_item__label">
                Время прилета
              </div>
              {getDate(item.departure)}
            </div>
            <div className="card_item__row">
              <div className="card_item__label">
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
