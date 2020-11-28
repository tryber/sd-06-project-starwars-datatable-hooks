import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from '../context/StarWarsContext';

export default function Table(props) {
  const { getAPI } = useContext(StarWarsContext);
  const { planets } = props;
  const columns = planets[0] && Object.keys(planets[0]);

  useEffect(() => {
    getAPI();
  }, []);
  const numberOfPlanets = 12;
  const numberOfCategories = 13;
  return (
    <table className="table">
      <thead>
        <tr>
          {planets[0] && columns.map((heading) => <th key="key">{heading}</th>)
            .filter((place, index) => index <= numberOfPlanets)}
        </tr>
      </thead>
      <tbody>
        {planets.map((row) => (
          <tr key={ planets }>
            {columns
              .map((column) => (<td key={ `planet-${planets}` }>{row[column]}</td>))
              .filter((place, index) => index <= numberOfCategories)}
          </tr>))}
      </tbody>
    </table>

  );
}
Table.propTypes = {
  planets: PropTypes.string.isRequired,
};
