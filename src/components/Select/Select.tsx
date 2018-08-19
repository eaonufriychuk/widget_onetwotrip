import React from 'react';
import './Select.scss';

interface IProps {
  flights: string[];
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export default function Select(props: IProps) {
  const { flights, value, handleChange } = props;

  return (
    <select className="select" value={value} onChange={handleChange}>
      {flights.map(item => (
        <option key={item} value={item}>
          {item}
        </option>
      ))}
    </select>
  );
}
