import React, { useContext, useEffect } from 'react';
import StarWarsContext from '../context/StarWarsContext';

export default function Table(props) {
  const { getAPI } = useContext(StarWarsContext);
  const { planets } = props;
  const columns = planets[0] && Object.keys(planets[0]);

  useEffect(() => {
    getAPI();
  }, []);
  return (
    <table className="table">
      <thead>
        <tr>
          {planets[0] && columns.map((heading) => <th>{heading}</th>)
            .filter((place, index) => index <= 12)}
        </tr>
      </thead>
      <tbody>
        {planets.map((row) => (
          <tr key={ columns }>
            {columns
              .map((column) => (<td>{row[column]}</td>))
              .filter((place, index) => index <= 13)}
          </tr>))}
      </tbody>
    </table>

  );
}
